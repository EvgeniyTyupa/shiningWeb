import { Controller, useForm } from 'react-hook-form'
import classes from '../AdminForm.module.css'
import { makeStyles, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import MomentUtils from '@date-io/moment'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

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

const MusicAddForm = (props) => {
    const { handleSubmit, control, reset } = useForm()

    const material = useStyles()

    const onSubmit = (data, e) => {
        e.preventDefault()
        reset({
            name: "",
            artist: "",
            genre: "",
            year_of_release: "",
            image: null,
            track: null
        })
    }

    const { t } = useTranslation()

    return(
        <form className={classes.main} onSubmit={handleSubmit(onSubmit)}>
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
                            label="Track Name"
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
                    name="artist"
                    control={control}
                    defaultValue=""
                    rules={{ required: t("errors.required") }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            label="Artist Name"
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
                    name="genre"
                    control={control}
                    defaultValue=""
                    rules={{ required: t("errors.required") }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error.message : null}
                            label="Genre"
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
                    name="genre"
                    control={control}
                    defaultValue=""
                    rules={{ required: t("errors.required") }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker
                                error={!!error}
                                helperText={error ? error.message : null}
                                label="Year of Release"
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                                autoComplete="off"
                                classes={material}
                                views={["year"]}
                            />
                        </MuiPickersUtilsProvider>
                        
                    )}
                />
            </div>
        </form>
    )
}

export default MusicAddForm