//create schema for size model where I need only get api no need post data from this schema 
import mongoose from 'mongoose';

const sizeSchema = new mongoose.Schema({
    label: { type: String, required: [true, "Size is required"], unique: true },
    value: { type: Number, required: true, unique: true },
    type: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now },
});;
sizeSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Size = mongoose.models.Size || mongoose.model('sizes', sizeSchema);
export default Size