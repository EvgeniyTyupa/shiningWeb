import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import classes from './LoginForm.module.css'
import { makeStyles, TextField } from '@material-ui/core';

const LoginForm = (props) => {
    const { handleSubmit, control, reset } = useForm()
    const { login } = props

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

    return(
        <form className={classes.main} onSubmit={handleSubmit(onSubmit)}>
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
                        />
                    )}
                />
            </div>
        </form>
    )
}

export default LoginForm