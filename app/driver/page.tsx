"use client";

import { Container } from "@/components/shared/container";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "@/components/shared/form/dataPicker";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import DynamicTextFields from "@/components/shared/form/dynamicTextFields";
import MaterialUISelect from "@/components/shared/form/materialUISelect";
import CheckboxOptions from "@/components/shared/form/checkboxOptions";
import CheckboxOptions2 from "@/components/shared/form/checkboxOptions2";

export default function Driver() {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue)
  const {
    register,
    unregister,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
    control,
  } = useForm({ mode: "onChange" });

  interface FormValues {
    password: string;
    password_repeat: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    license: string;
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert("Form submitted with data: " + JSON.stringify(data));
    reset();
  };

  return (
    <Container>
      <header className="flex justify-between items-center px-4">
        <div>
          <h1 className="text-2xl font-bold">Route Management</h1>
          <p>Create and manage your bus routes</p>
        </div>
        <div>
          <Link
            href="/driver/route"
            className="bg-[#2563EB] flex items-center justify-center gap-2 rounded-lg w-[158px] h-[40px] text-white p-2 
                hover:bg-[#1E3A8A] hover:shadow-lg transition duration-300"
          >
            <FaPlus style={{ color: "white" }} /> Create Route
          </Link>
        </div>
      </header>

      <main className="px-4 bg-[white] rounded-xl">
        {/* Форму тепер обгортаємо в onSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TextField з react-hook-form */}


          {/* Додавання CustomDatePicker */}

          <div className="flex">
            <CustomDatePicker
              title="Departure Date"
              name="departureDate"
              register={register}
              errors={errors}
              control={control} // Передаємо control
            />
            <CustomDatePicker
              title="Arrival Date"
              name="arrivalDate"
              register={register}
              errors={errors}
              control={control} // Передаємо control
            />
          </div>
          <div className="flex ">

            <div className="mb-6">
              <label
                htmlFor="depatureFrom"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Depature From
              </label>
              <TextField
                id="depatureFrom"
                {...register("depatureFrom", { required: "depatureFrom is required" })}
                variant="outlined"
                fullWidth
                error={!!errors.depatureFrom}
                helperText={errors.depatureFrom ? errors.depatureFrom.message : ""}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="arrivalTo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Arrival To
              </label>
              <TextField
                id="arrivalTo"
                {...register("arrivalTo", { required: "arrivalTo is required" })}
                variant="outlined"
                fullWidth
                error={!!errors.arrivalTo}
                helperText={errors.arrivalTo ? errors.arrivalTo.message : ""}
              />
            </div>
          </div>

          <DynamicTextFields unregister={unregister} register={register} errors={errors} />

          <div className="mb-6">
            <label
              htmlFor="busNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Bus Number
            </label>
            <TextField
              id="busNumber"
              {...register("busNumber", { required: "busNumber is required" })}
              variant="outlined"
              fullWidth
              error={!!errors.busNumber}
              helperText={errors.busNumber ? errors.busNumber.message : ""}
            />
          </div>
          <div>
            <h2>
              Bus Layout
            </h2>
            <MaterialUISelect selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
          </div>

          <div className="mb-6">
            <label
              htmlFor="routePrice"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Route Price
            </label>
            <TextField
              id="routePrice"
              {...register("routePrice", { required: "routePrice is required" })}
              variant="outlined"
              fullWidth
              error={!!errors.routePrice}
              helperText={errors.routePrice ? errors.routePrice.message : ""}
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <CheckboxOptions />
            </div>
            <div>
              <CheckboxOptions2 />

            </div>
            <div> <Button
              variant="contained"
              color="primary"
              type="submit"

            >
              Cancel
            </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isValid} // Вимикає кнопку, якщо форма не валідна
              >
                Create Route
              </Button>
            </div>
          </div>





        </form>
      </main>
    </Container>
  );
}
