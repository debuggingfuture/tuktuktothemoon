export interface File {
  Name: string;
  RootCID: string;
  Size: string;
  CreatedAt: string;
}

export interface Bucket {
  ID: string;
  Name: string;
  CreatedAt: string;
  files: File[];
}

// Fetch files for a specific bucket
export const fetchBucketFiles = async (bucketName: string): Promise<File[]> => {
  try {
    const response = await fetch(`/api/akave/bucket/${bucketName}/files`);
    const result = await response.json();
    return result.success ? result.data : [];
  } catch (error) {
    console.error(`Error fetching files for bucket ${bucketName}:`, error);
    return [];
  }
};

// Fetch all buckets
export const fetchBuckets = async (): Promise<Bucket[]> => {
  try {
    const response = await fetch("/api/akave/bucket");
    const result = await response.json();
    
    if (result.success && result.data) {
      // Fetch files for each bucket
      const bucketsWithFiles = await Promise.all(
        result.data.map(async (bucket: Bucket) => ({
          ...bucket,
          files: await fetchBucketFiles(bucket.Name)
        }))
      );
      return bucketsWithFiles;
    }
    return [];
  } catch (error) {
    console.error("Error fetching buckets:", error);
    return [];
  }
};

// Create a new bucket
export const createBucket = async (bucketName: string): Promise<{
  success: boolean,
  error?: any,
  data?: any
}> => {
  try {
    const response = await fetch("/api/akave/bucket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bucketName }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    // TODO error for duplicated is shown as 'Unexpected output format for bucket creation'
    console.error("Error creating bucket:", error);
    return {
      success: false,
      error
    };
  }
};

export const createDownloadUrl = (bucketName: string, name: string, isMetadata?: boolean)=>{
  let fileName = name;
  if (isMetadata){
    fileName = name + ".json";
  }
  return `https://akavelink-latest.onrender.com/buckets/${bucketName}/files/${fileName}/download`;
}

// Upload file to bucket
export const uploadFile = async (
  bucketName: string, 
  file: any,
): Promise<{ success: boolean; transactionHash: string }> => {
  try {
    const formData = new FormData();


      // TODO blob use ("file", file, fileName)
      // formData.append("file", renamed);
      
    // @ts-ignore
    formData.append("file", file);

    const response = await fetch(`/api/akave/bucket/${bucketName}/files`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    return { success: result.success, ...(result.data ||{}) };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, transactionHash: "" };
  }
}; 

export const uploadFileObject = async (
  bucketName: string, 
  file: any
): Promise<{ success: boolean; transactionHash: string }> => {
  try {

    const response = await fetch(`/api/akave/bucket/${bucketName}/files`, {
      method: "POST",
      body: JSON.stringify({
        a: 123
      }),
    });

    const result = await response.json();
    return { success: result.success, ...(result.data ||{}) };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, transactionHash: "" };
  }
}; 