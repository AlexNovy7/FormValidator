import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { FormData } from "../types/form-data.type";
import { schema } from "../validators/form-validator-schema";

const ValidationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    alert(`Имя: ${data.name}, Возраст: ${data.age}, Email: ${data.email}`);
    setSubmittedData(data);
  };

  return (
    <Box sx={{ width: '400px', margin: '0 auto', padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Форма с валидацией
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          label="Имя"
          variant="outlined"
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          label="Возраст"
          variant="outlined"
          margin="normal"
          type="text"
          {...register("age")}
          error={!!errors.age} 
          helperText={errors.age?.message}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <Button type="submit" variant="contained" sx={{ marginTop: 2, width: '100%' }}>
          Проверить данные
        </Button>
      </form>
    </Box>
  );
};

export default ValidationForm;
