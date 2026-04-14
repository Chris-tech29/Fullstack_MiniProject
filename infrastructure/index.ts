import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";


const bucket = new aws.s3.Bucket("frontend-bucket");


export const bucketName = bucket.bucket;
