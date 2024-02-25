import { Schema, model, models } from "mongoose";

export interface IImage extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string; // URL type is typically represented as a string in TypeScript for the URL's value
    width?: number; // Optional because it's not marked as required
    height?: number; // Optional because it's not marked as required
    config?: object; // Could be more specifically typed if the structure of config is known
    transformUrl?: string; // Optional and URL as string
    aspectRatio?: string; // Optional
    color?: string; // Optional
    prompt?: string; // Optional
    author: {_id: string; firstName: string; lastName: string;} // Assuming the ObjectId is represented as a string in TypeScript
    createdAt?: Date; // Optional because it has a default value, implying it's not required to be provided by the user
    updatedAt?: Date; // Optional because it has a default value, implying it's not required to be provided by the user
}


const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;