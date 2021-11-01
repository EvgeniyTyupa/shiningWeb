import React from 'react'
import classes from './OrderForm.module.css'
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { makeStyles, TextField } from '@material-ui/core';
import Messengers from '../../UI/Social/Messengers/Messengers';
import CustomButton from '../../UI/Button/Button';
import { cx } from '../../../Utils/classnames';
import { connect } from 'react-redux';
import { sendMail } from '../../../Redux/commonReducer';


const useStyles = makeStyles((theme) => ({
    root:{
        width: "100%",
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            border: "none"
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            border: "none"
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
            border: "none"
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            color: "white",
            fontWeight: "500"
        },
        '& .MuiFormLabel-root': {
            color: 'rgba(255, 255, 255, 0.65)',
            "@media screen and (max-width: 468px)": {
                fontSize: "14px"
            }
        },
        '& .MuiOutlinedInput-notchedOutline': {
            background: "#fc5d08ca",
            border: "none",
            boxShadow: "inset 4px 4px 30px -7px black"
        },
        '& .MuiInputBase-root': {
            color: "white",
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
            color: 'white'
        }
    }
}))

const OrderForm = (props) => {
    const { handleSubmit, control, reset } = useForm()

    const { sendMail, startUserUrl } = props

    const { t } = useTranslation()

    const material = useStyles()

    const onSubmit = (data, e) => {
        e.preventDefault()
        const { name, phone } = data
        
        sendMail(name, phone, startUserUrl)
        reset({
            name: "",
            phone: ""
        })
    }

    return(
        <div className={classes.main}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className={cx(classes.field, classes.secondField)}>
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
                {/* <div className={cx(classes.field, classes.messengers)}>
                    <Messengers/>
                </div> */}
                <CustomButton text={t("actions.submit")} type="submit" className={classes.submit} />
            </form>
            <div className={classes.rules}>
                <div className={classes.rule}>
                    <span>&#10035;</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{t("forms.order.rules.require")}</span>
                </div>
                <div className={classes.rule}>
                    <span className={classes.ruleMark}>&#10003;</span>
                    <span>&nbsp;-&nbsp;</span>
                    <span>{t("forms.order.rules.agreed")}</span>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    startUserUrl: state.common.startUserUrl
})

export default connect(mapStateToProps, {
    sendMail
})(OrderForm) 