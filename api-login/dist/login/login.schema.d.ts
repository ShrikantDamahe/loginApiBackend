import * as mongoose from 'mongoose';
export declare const LoginSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email?: string;
    password?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email?: string;
    password?: string;
}>> & Omit<mongoose.FlatRecord<{
    email?: string;
    password?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
