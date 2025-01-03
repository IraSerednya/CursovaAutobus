"use client";
import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DatePicker from "react-datepicker";
import {
  FieldErrors,
  UseFormRegister,
  Controller,
  useForm,
} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  departureDate?: Date;
  arrivalDate?: Date;
}

interface Props {
  name: keyof FormValues;
  title: string;
  register: UseFormRegister<FormValues>;
  control: any; // Передаємо control з useForm
  errors: FieldErrors<FormValues>;
  className?: string;
}

const CustomDatePicker = ({
  name,
  title,
  register,
  control,
  errors,
  className,
}: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control} // Використовуємо control
        defaultValue={selectedDate}
        rules={{ required: `${title} is required` }}
        render={({ field }: any) => (
          <DatePicker
            className="w-[588px]"
            selected={field.value}
            onChange={(date: Date | null) => {
              setSelectedDate(date);
              field.onChange(date); // Передаємо значення в react-hook-form
            }}
            customInput={
              <TextField
                label={title}
                {...field}
                error={!!errors[name]}
                helperText={errors[name]?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <div
                        style={{
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <CalendarTodayIcon
                          style={{
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </InputAdornment>
                  ),
                }}
                fullWidth={false}
              />
            }
          />
        )}
      />
    </div>
  );
};

export default CustomDatePicker;