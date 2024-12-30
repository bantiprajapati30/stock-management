import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    parentValue: {
        type: Number,
        required: true,
    },
    refValueId: {
        type: Number,
        required: true,
        unique: true
    },
    CategoryName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

// Define a compound unique index on name and parentValue
// brandSchema.index({ name: 1, parentValue: 1 }, { unique: true });

// Update the updatedAt timestamp before saving
brandSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Brand = mongoose.models.Brand || mongoose.model('Brand', brandSchema);

export default Brand;
