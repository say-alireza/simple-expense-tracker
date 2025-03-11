import { FieldValues, useForm, FormState } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
const schema = z.object({
  name: z.string().min(3, { message: " name must be at least 3 characters " }),
  age: z
    .number({ invalid_type_error: "Age field is required. " })
    .min(18, { message: "age must be at least 18" }),
});
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: String;
//   age: number;
// }
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button type="submit" disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
