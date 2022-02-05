import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfileData } from '../../store/profile';

function ProfileForm({ firstName, lastName, sex, city, phone }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ firstName, lastName, city, phone });

  return (
    <FormControl sx={{ m: '0 auto 20px auto', width: '50ch' }} variant='standard'>
        <h3>Редактировать профиль</h3>
        <TextField
          label="Фамилия"
          defaultValue={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          value={formData.lastName}
        /><br/>

        <TextField
          label="Имя"
          defaultValue={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          value={formData.firstName}
        /><br/>

        <TextField
          label="Город"
          defaultValue={formData.city}
          onChange={(e) => setFormData({...formData, city: e.target.value})}
          value={formData.city}
        /><br/>

        <TextField
          label="Номер телефона"
          defaultValue={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          value={formData.phone}
        /><br/>
        
        <Button variant="contained" onClick={() => dispatch(updateProfileData(formData))}>
            Отправить
        </Button>
    </FormControl>
  );
}

export default ProfileForm;
