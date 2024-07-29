const conf = {
  // appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteUrl: String("https://cloud.appwrite.io/v1"),
  appwriteProjectId: String("6698a7f7001bb8757103"),
  appwriteDatabaseId: String("database-dev"),
  appwriteCollectionId: String(""),
  appwriteBucketId: String("bucket-dev"),
};
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf;
