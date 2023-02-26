import MainCard from 'ui-component/cards/MainCard';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router';
import CardContent from '@mui/material/CardContent';
import { Formik, replace } from 'formik';
import { Navigate } from 'react-router';
import {
    Button,
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    InputAdornment,
    IconButton
} from '@mui/material';

// project imports
import useScriptRef from 'hooks/useScriptRef';

import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import axios from 'axios';
import config from 'config';

const CreateUser = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();
    const errors = [];

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const user_data = JSON.parse(localStorage.getItem('user_data'));
    console.log(user_data);

    return (
        <MainCard title="Create Tracenet User">
            <Card>
                <CardContent style={{ width: '70%', marginLeft: '15%' }}>
                    <Formik
                        initialValues={{
                            tracenet_username: "",
                            tracenet_password: "",
                            user: user_data ? user_data.id : null,
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            tracenet_username: Yup.string().max(255).required('Username is required'),
                            tracenet_password: Yup.string().max(255).required('Password is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            try {
                                if (scriptedRef.current) {
                                    const URL = `${config.baseUrl}tracenet_user/`;
                                    axios
                                        .post(URL, values, {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Token ${user_data ? user_data.key : null}`,
                                            },
                                        })
                                        .then((res) => {
                                            localStorage.setItem('user_data', JSON.stringify({ ...user_data, tracenet_data: res.data }));
                                            navigate('/tracenet/user-detail');
                                        })
                                        .catch((err) => {
                                            Object.values(err.response.data).map((data) => {
                                                errors.push(data);
                                            });
                                            alert(errors);
                                        });

                                    setStatus({ success: true });
                                    setSubmitting(false);
                                }
                            } catch (err) {
                                console.error(err);
                                if (scriptedRef.current) {
                                    setStatus({ success: false });
                                    setErrors({ submit: err.message });
                                    setSubmitting(false);
                                }
                            }
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit} {...others}>
                                <FormControl fullWidth error={Boolean(touched.tracenet_username && errors.tracenet_username)} sx={{ ...theme.typography.customInput }} >
                                    <InputLabel htmlFor="outlined-adornment-tracenet_username">Tracenet Username</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-tracenet_username"
                                        type="text"
                                        value={values.tracenet_username}
                                        name="tracenet_username"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        label="Username"
                                        inputProps={{}}
                                    />
                                    {touched.tracenet_username && errors.tracenet_username && (
                                        <FormHelperText error id="standard-weight-helper-text-tracenet_username">
                                            {errors.tracenet_username}
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    error={Boolean(touched.tracenet_password && errors.tracenet_password)}
                                    sx={{ ...theme.typography.customInput }}
                                >
                                    <InputLabel htmlFor="outlined-adornment-tracenet_password">Tracenet Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-tracenet_password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.tracenet_password}
                                        name="tracenet_password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle tracenet_password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        inputProps={{}}
                                    />
                                    {touched.tracenet_password && errors.tracenet_password && (
                                        <FormHelperText error id="standard-weight-helper-text-tracenet_password">
                                            {errors.tracenet_password}
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                {errors.submit && (
                                    <Box sx={{ mt: 3 }}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Box>
                                )}

                                <Box sx={{ mt: 2 }}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={isSubmitting}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Submit
                                        </Button>
                                    </AnimateButton>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
        </MainCard >
    );

};
export default CreateUser;
