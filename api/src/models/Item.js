import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   start_price: {
      type: Number,
      required: true,
   },
   reserve_price: {
      type: Number,
      required: true,
   },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;