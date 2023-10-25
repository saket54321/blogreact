import conf from "../conf/conf";
import { Client,ID, Databases, Query,Storage} from "appwrite";

export class service{
    //  client =new Client();
    //  databases;
    //  bucket;
    //  Constructor(){
    //     this.client
    //     .setEndpoint(conf.appwriteurl)
    //     .setProject(conf.appwriteprojectid);
    //     this.databases = new Databases(this.client);
    //     this.bucket = new Storage(this.client);
    //  }
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    } 

    //  async createPost({title, slug, content, featuredImage, status, userId}){
    //     try {
    //         return await this.databases.createDocument(
    //             conf.appwritedatabaseid,
    //             conf.appwritecollectionid,
    //             slug,
    //             {
    //                 title,
    //                 content,
    //                 featuredImage,
    //                 status,
    //                 userId,
    //             }
    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: createPost :: error", error);
    //     }

    // }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                             conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(conf.appwritedatabaseid);
            console.log(conf.appwritecollectionid);
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }
    // in update it do not return id in object because id is given in update
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            //console.log(conf.appwritebucketid);
            //console.log(file);
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketid,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwritebucketid,
            fileId
        )
    }
}


 

const services =new service();

export default services;