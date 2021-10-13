import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.css'
import { makeStyles, TextField } from '@material-ui/core';
import CustomButton from '../../UI/Button/Button';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#FC5E08"
        },
        '& .MuiFormLabel-root': {
            color: '#FC5E08',
            "@media screen and (max-width: 468px)": {
                fontSize: "14px"
            }
        },
    }
}))

const LoginForm = (props) => {
    const { handleSubmit, control, reset } = useForm()
    const { login } = props

    const material = useStyles()

    const { t } = useTranslation()

    const onSubmit = (data, e) => {
        e.preventDefault()
        const { username, password } = data
        login(username, password)
        reset({
            username: "",
            password: ""
        })
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <form className={classes.main} onSubmit={handleSubmit(onSubmit)} data-aos="fade-down">
            <div className={classes.field}>
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: t("errors.required") }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            label="Username"
                            variant="outlined"
                            onChange={onChange}
                            value={value}
                            autoComplete="off"
                            classes={material}
                        />
                    )}
                />
            </div>
            <div className={classes.field}>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: t("errors.required") }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            label="Password"
                            variant="outlined"
                            onChange={onChange}
                            value={value}
                            autoComplete="off"
                            type="password"
                            classes={material}
                        />
                    )}
                />
            </div>
            <CustomButton type="submit" text="Login"/>
        </form>
    )
}

export default LoginForm