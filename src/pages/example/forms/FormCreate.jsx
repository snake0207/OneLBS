import { useEffect, useState } from "react";

// material-ui
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Switch,
  Checkbox,
  FormGroup,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { useFormik } from "formik";

// project import

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import MuiSelect from "components/comm/MuiSelect";
import { LocalizationProvider } from "@mui/x-date-pickers";
import MuiPcDatePicker from "components/comm/MuiPcDatePicker";
import MuiConfirmDialog from "components/comm/MuiDialog";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { utilToday } from "components/util";
import CheckIcon from "@mui/icons-material/Check";

// ============================|| FIREBASE - REGISTER ||============================ //
const selectList = [
  { k: "10", v: "서울" },
  { k: "20", v: "경기" },
  { k: "30", v: "부산" },
];

const _initialValues = {
  // userid: "",
  // password: "",
  // confirmPassword: "",
  // age: 19,
  contact: "",
  // email: "",
  // city: "10",
  // agree: "N",
  perm: "manager",
  dashboard: "N",
  profile: "N",
  sdate: dayjs(new Date()),
  edate: dayjs(new Date()),
};

// 전화번호 Check
const phoneReg = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})/;

const _validationSchema = Yup.object().shape({
  // userid: Yup.string().max(12).required("User-ID is required"),
  // password: Yup.string()
  //   .max(8, "Password should be of minimum 8 characters")
  //   .required("Password is required"),
  // confirmPassword: Yup.string().test(
  //   "Password-match",
  //   "Password mismatch",
  //   function (value) {
  //     return value === this.resolve(Yup.ref("password"));
  //   }
  // ),
  // age: Yup.number()
  //   .max(99, "Age should be of max value 99")
  //   .required("Age is required")
  //   .positive()
  //   .integer(),
  contact: Yup.string("Enter your phone number")
    .matches(phoneReg, "Phone number is not valid(only digit)")
    .max(11, "Contact should be of maximum 11 characters")
    .required("Phone number is required"),
  // email: Yup.string()
  //   .email("Must be a valid email")
  //   .max(30)
  //   .required("Email is required"),
  sdate: Yup.date().min(utilToday(), "Start Date must be later than today"),
  edate: Yup.date()
    .required("end date is required")
    .min(Yup.ref("sdate"), "End date must be after start date"),
});

// ============== Create Page ======================
const FormCreate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitForm = () => {
    setOpenDialog(false);
    formik.handleSubmit();
  };

  useEffect(() => {}, []);

  const formik = useFormik({
    initialValues: _initialValues,
    validationSchema: _validationSchema,
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        setStatus({ success: false });

        const fValues = {
          ...values,
          sdate: dayjs(values.sdate).format("YYYYMMDDHHmmss"),
          edate: dayjs(values.edate).format("YYYYMMDDHHmmss"),
        };
        // setFormValues(curr => ({ ...curr, ...fValues }));
        console.log(JSON.stringify(fValues, null, 2));

        setSubmitting(false);
      } catch (err) {
        console.error(err);
        setStatus({ success: false });
        setErrors({ submit: err.message });
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {/* <form noValidate onSubmit={handleConfirmMsg}> */}
      <form noValidate>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={2.75}
          // sx={{ border: `1px solid red`, m: 16 }}
        >
          {/* row 1 */}
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ width: fullWidth ? "100%" : "50%" }}>
              <InputLabel htmlFor="userid">User ID*</InputLabel>
              <OutlinedInput
                fullWidth
                id="userid"
                type="userid"
                label="First Name*"
                value={formik.values.userid}
                name="userid"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="이름을 입력하세요"
                error={Boolean(formik.touched.userid && formik.errors.userid)}
              />
              {formik.touched.userid && formik.errors.userid && (
                <FormHelperText error id="helper-text-uname-signup">
                  {formik.errors.userid}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* row */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                fullWidth
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                      color="secondary"
                    >
                      {showPassword ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter password"
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText error id="helper-text-password-signup">
                  {formik.errors.password}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* end of password */}

          {/* row */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                label="confirmPassword"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formik.values.confirmPassword}
                name="confirmPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={Boolean(
                  formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                )}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                      color="secondary"
                    >
                      {showPassword ? (
                        <EyeOutlined />
                      ) : (
                        <EyeInvisibleOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter password"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <FormHelperText error id="helper-text-confirmPassword">
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                )}
            </FormControl>
          </Grid>
          {/* end of password */}

          {/* row */}
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ width: fullWidth ? "100%" : "50%" }}>
              <InputLabel htmlFor="age">Age*</InputLabel>
              <OutlinedInput
                fullWidth
                id="age"
                type="age"
                label="Age*"
                value={formik.values.age}
                name="age"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="25"
                error={Boolean(formik.touched.age && formik.errors.age)}
              />
              {formik.touched.age && formik.errors.age && (
                <FormHelperText error id="helper-text-age">
                  {formik.errors.age}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* end of row 1 */}
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ width: fullWidth ? "100%" : "50%" }}>
              <InputLabel htmlFor="contact-signup">Contact</InputLabel>
              <OutlinedInput
                fullWidth
                id="contact-signup"
                value={formik.values.contact}
                name="contact"
                label="contact"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="전화번호입력 (- 없이)"
                error={Boolean(formik.touched.contact && formik.errors.contact)}
              />
              {formik.touched.contact && formik.errors.contact && (
                <FormHelperText error id="helper-text-contact-signup">
                  {formik.errors.contact}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ width: fullWidth ? "100%" : "50%" }}>
              <InputLabel htmlFor="email-login">Email Address*</InputLabel>
              <OutlinedInput
                fullWidth
                id="email-login"
                type="email"
                value={formik.values.email}
                name="email"
                label="Email Address*"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="demo@gmail.com"
                error={Boolean(formik.touched.email && formik.errors.email)}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {formik.errors.email}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* select-box */}
          <Grid item xs={12}>
            <MuiSelect
              name="city"
              label="도시 선택"
              value={formik.values.city}
              onChange={formik.handleChange}
              data={{ selectedIdx: -31, items: selectList }}
              width="50%"
            />
          </Grid>
          {/* end of select-box */}

          {/* Switch */}
          <Grid item xs={12}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3} md={2}>
                <Typography variant="h6">제공동의*</Typography>
              </Grid>
              <Grid item xs={9} md={10}>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      id="agree"
                      name="agree"
                      size="medium"
                      defaultChecked
                      onChange={formik.handleChange}
                    />
                  }
                  value="Y"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Radio */}
          <Grid item xs={12}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3} sm={2}>
                {/* <InputLabel htmlFor="perm">권한 *</InputLabel> */}
                <Typography variant="h6" color="secondary.dark">
                  권한 *
                </Typography>
              </Grid>
              <Grid item xs={9} sm={10}>
                <RadioGroup
                  row
                  onChange={formik.handleChange}
                  defaultValue="manager"
                >
                  <FormControlLabel
                    control={<Radio name="perm" color="primary" />}
                    label="root"
                    value="root"
                    sx={{
                      width: "235px",
                      color:
                        formik.values.perm === "root"
                          ? "primary.main"
                          : "secondary.main",
                    }}
                  />
                  <FormControlLabel
                    control={<Radio name="perm" color="primary" />}
                    label="manager"
                    value="manager"
                    sx={{
                      width: "235px",
                      color:
                        formik.values.perm === "manager"
                          ? "primary.main"
                          : "secondary.main",
                    }}
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>

          {/* check-box */}
          <Grid item xs={12}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" color="secondary.dark">
                  메뉴 사용 *
                </Typography>
              </Grid>
              <Grid item xs={9} sm={10}>
                <FormGroup row>
                  <FormControlLabel
                    onChange={formik.handleChange}
                    control={
                      <Checkbox
                        name="dashboard"
                        icon={<CheckIcon />}
                        checkedIcon={<CheckIcon />}
                      />
                    }
                    label="대쉬보드"
                    value="Y"
                    sx={{
                      width: "235px",
                      color:
                        formik.values.dashboard[0] === "Y"
                          ? "primary.main"
                          : "secondary.main",
                    }}
                  />
                  <FormControlLabel
                    onChange={formik.handleChange}
                    control={
                      <Checkbox
                        name="profile"
                        icon={<CheckIcon />}
                        checkedIcon={<CheckIcon />}
                      />
                    }
                    label="프로파일"
                    value="Y"
                    sx={{
                      width: "235px",
                      color:
                        formik.values.profile[0] === "Y"
                          ? "primary.main"
                          : "secondary.main",
                    }}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Grid>
          {/* end of check-nox */}

          {/* DatePicker */}
          <Grid item xs={12}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" color="secondary.dark">
                  날짜 선택
                </Typography>
              </Grid>
              <Grid item xs={9} sm={10}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ko"
                  >
                    <MuiPcDatePicker
                      name="sdate"
                      label="시작일"
                      value={formik.values.sdate}
                      // onChange={handleChange}
                      onChange={(value) => {
                        formik.setFieldValue("sdate", dayjs(value));
                      }}
                    />
                    {formik.errors.sdate && (
                      <Grid item xs={12}>
                        <FormHelperText error>
                          {formik.errors.sdate}
                        </FormHelperText>
                      </Grid>
                    )}
                    <Typography> ~ </Typography>
                    <MuiPcDatePicker
                      name="edate"
                      label="종료일"
                      value={formik.values.edate}
                      // onChange={handleChange}
                      onChange={(value) => {
                        formik.setFieldValue("edate", dayjs(value));
                      }}
                    />
                    {formik.errors.edate && (
                      <Grid item xs={12}>
                        <FormHelperText error>
                          {formik.errors.edate}
                        </FormHelperText>
                      </Grid>
                    )}
                  </LocalizationProvider>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          {/* end of DatePicker */}
          <Grid item xs={12} mt={2} mb={2}>
            <Divider />
          </Grid>

          {/* footer button area  */}
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  disableElevation
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  href={"/list"}
                  variant="outlined"
                  color="error"
                  sx={{ borderRadius: "24px" }}
                >
                  CANCEL
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  href="/list"
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: "24px" }}
                >
                  LIST
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  onClick={() => setOpenDialog(true)}
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "24px" }}
                >
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {/* confirm dialog 출력 */}
      {openDialog && (
        <MuiConfirmDialog
          title="Save"
          content="저장 하시겠습니까 ?"
          onConfirm={handleSubmitForm}
          onCancel={() => setOpenDialog(false)}
        />
      )}
    </>
  );
};

export default FormCreate;
