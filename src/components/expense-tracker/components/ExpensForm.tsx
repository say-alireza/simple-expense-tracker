import React, { useState } from "react";
import { z } from "zod";
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import categories from "../categories";
const schema = z.object({
  description: z.string().min(3,{message:"Descrtiption should be at least 3 characters."}).max(50),
  amount: z.number({invalid_type_error:"Amount is required"}).min(0.01).max(100_00),
  category: z.enum(categories , {errorMap : () => ({message:"Catergory is required"})}),
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props
{
  onSubmit : (data:ExpenseFormData) => void;
}
const ExpensForms = ({onSubmit}:Props) => {
  const {register,handleSubmit,reset,formState:{errors},} = useForm<ExpenseFormData>({resolver:zodResolver(schema)})
  return ( 
    <> 
      <form    onSubmit={handleSubmit((data) => {
        onSubmit(data); // Call the onSubmit prop
        reset(); // Reset the form after submission
      })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input {...register('description')} id="description" type="text" className="form-control" />
        {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input {...register('amount',{valueAsNumber:true })} id="amount" type="number" className="form-control" />
                {errors.amount  && <p className="text-danger">{errors.amount.message }</p>}

        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select   {...register('category')} id="category" className="form-select">
            <option value=""></option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
                  {errors.category && <p className="text-danger">{errors.category.message}</p>}

        </div>

        <button type="submit" className="btn  mb-3  btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpensForms;
