import { Box, Grid, Stack, Typography } from "@mui/material";
import Logo from "components/Logo";

const footer = {
  menu: [
    {
      name: "회사소개",
      link: "https://corp.kt.com",
    },
    {
      name: "서비스이용약관",
      link: "https://corp.kt.com/html/etc/agreement_01.html",
    },
    {
      name: "개인정보처리방침",
      link: "https://inside.kt.com/html/privacy/privacy12.html",
      fontWeight: "bold",
    },
    {
      name: "법적고지",
      link: "https://corp.kt.com/html/etc/legal.html",
    },
  ],
  address: {
    corp: "(주)케이티 대표이사 김영섭 경기도 성남시 분당구 불정로 90 (정자동) 사업자등록번호 : 102-81-42945 통신판매업신고 : 2002-경기성남-0048 사업자정보확인",
    center:
      "고객센터 : [모바일] 휴대폰+114(무료), 1588-0010(유료) [인터넷/TV/전화] 유선전화(국번없이) 100, 휴대폰(지역번호)+100, 1514(발신전용), 1524(발신전용)",
  },
  copyright: "Copyright© KT Corp. All rights reserved.",
};

const Footer = (props) => {
  return (
    <Grid container mt={2} rowSpacing={1.5}>
      {/* row 1 */}
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {footer &&
            footer.menu.map((item, i) => (
              <Typography
                key={item.name}
                variant="h6"
                color="secondary.600"
                onClick={() => window.open(item.link)}
                sx={{
                  cursor: "pointer",
                  fontWeight: item.fontWeight ? item.fontWeight : undefined,
                }}
              >
                {item.name}
              </Typography>
            ))}
        </Stack>
      </Grid>
      {/* row 2 */}
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="flex-end">
          <Grid item xs={10}>
            {footer.address && (
              <Typography variant="h6" color="secondary.main">
                {footer.address.corp}
              </Typography>
            )}
            {footer.address && (
              <Typography variant="h6" color={"secondary.main"}>
                {footer.address.center}
              </Typography>
            )}
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="flex-end">
              <Logo imgKt />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* row 3 */}
      <Grid item xs={12}>
        {footer && (
          <Typography variant="h6" color={"secondary.main"}>
            {footer.copyright}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Footer;
