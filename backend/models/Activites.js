import mongoose from "mongoose";

const activiteSchema = new mongoose.Schema({
  ActiviteId: {
     type: String,
     required: true,
     unique: true,
     trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,  
    required: true
  },
  time: {
    type: String,  
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Activite = mongoose.model('Activite', activiteSchema);

export default Activite;
