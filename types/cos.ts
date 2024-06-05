export namespace CosTypes {
  export interface BucketItem {
    Name: string;
    Location: string;
    CreationDate: string;
    BucketType: string;
  }
  export interface ObjectItem {
    Key: string;
    LastModified: string;
    ETag: string;
    Size: string;
    url: string;
    Owner: {
      ID: string;
      DisplayName: string;
    };
    StorageClass: string;
  }
}
