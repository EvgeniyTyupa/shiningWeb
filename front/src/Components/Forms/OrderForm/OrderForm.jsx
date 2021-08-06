import React from 'react'
import classes from './OrderForm.module.css'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            border: "none"
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FC5E08'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FC5E08',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0
        },
        '& .MuiFormLabel-root': {
            color: 'rgba(255, 255, 255, 0.65)',
            borderColor: '#E5E655',
            "@media screen and (max-width: 468px)": {
                fontSize: "14px"
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            background: "#FC5E08",
            boxShadow: "inset 4px 4px 30px -7px black"
        },
        '& .MuiInputBase-root': {
            color: 'rgba(255, 255, 255, 0.65)',
            "@media screen and (max-width: 468px)": {
                height: "50px"
            }
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginTop: "5px",
            '@media screen and (max-width: 468px)':{
                fontSize: '12px'
            }
        },
        '& .MuiTypography-colorTextSecondary': {
            color: 'rgba(255, 255, 255, 0.65)'
        }
    }
}))

const OrderForm = (props) => {
    const { handleSubmit, control, reset } = useForm()

    const { t } = useTranslation()

    const material = useStyles()

    return(
        <div className={classes.main}>
            <form>
                <div className={classes.field}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: t("errors.required") }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                label={t("forms.order.name")}
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
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{ required: t("errors.required") }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                error={!!error}
                                helperText={error ? error.message : null}
                                label={t("forms.order.phone")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                                autoComplete="off"
                                classes={material}
                            />
                        )}
                    />
                </div>
            </form>
        </div>
    )
}

export default OrderForm 