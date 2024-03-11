import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import {
  MuiAlert,
  MuiDataGrid,
  MuiPcDatePicker,
  MuiProgressWithValueLabel,
  MuiSearch,
} from "components/comm";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MuiSubButton } from "components/comm/MuiButton";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.5,
    renderCell: (params) => <Typography>{params.row.id}</Typography>,
  },
  {
    field: "title",
    headerName: "Title",
    flex: 1,
    renderCell: (params) => (
      <Typography color="secondary.darker">{params.row.title}</Typography>
    ),
  },
  {
    field: "year",
    headerName: "Year",
    flex: 1,
    renderCell: (params) => <Typography>{params.row.year}</Typography>,
  },
  {
    field: "rating",
    headerName: "Rating",
    flex: 1,
    renderCell: (params) => {
      return <Typography>{params.row.rating}</Typography>;
    },
  },
  {
    field: "comment",
    headerName: "Comment",
    flex: 1,
    renderCell: (params) => {
      return (
        <Stack direction="row" spacing={0.5}>
          <MuiSubButton
            name="edit"
            title="수정"
            outlined
            onClick={() => console.log(`편집 버튼 click : ${params.row.id}`)}
          />
          <MuiSubButton
            name="delete"
            title="삭제"
            outlined
            onClick={() => console.log(`삭제 버튼 click : ${params.row.id}`)}
          />
        </Stack>
      );
    },
  },
];

const FormList = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ movie_count: 0, movies: [] });
  const [apiCall, setApiCall] = useState(false);

  const [error, setError] = useState("");
  const DATA_PER_PAGE = 50;
  const [apiParams, setApiParams] = useState({
    page: 1,
    rating: 8,
    sdate: dayjs(new Date()),
    edate: dayjs(new Date()),
  });

  const getMovies = async () => {
    try {
      const resp = await axios({
        method: "get", // delete, post, put
        url: process.env.REACT_APP_MOVIE_URL,
        params: {
          minimum_rating: apiParams.rating,
          limit: DATA_PER_PAGE,
          page: apiParams.page,
          sort_by: "year",
        },
      });
      console.log(resp.data.data);
      const { movie_count, movies } = resp.data.data;
      setLoading(false);
      data &&
        setData({
          movie_count: movie_count,
          movies: [...data.movies, ...movies],
        });
    } catch (e) {
      console.error("Error fetching movies:", e);
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, [apiCall]);

  // 리스트 하단의 페이지 이동 버튼 click시 동작
  const handleOnPageChange = (currPage) => {
    const pageSize = parseInt(process.env.REACT_APP_PAGESIZE);
    const rowCount = (currPage + 1) * pageSize;

    if (currPage > 0 && rowCount >= data.movies.length) {
      setApiParams({ ...apiParams, page: apiParams.page + 1 });
      setApiCall((prev) => !prev);
    }
  };

  // 해당 필드명을 가져와서 처리 : params.row.필드명
  const handleRowClick = ({ row }) => {
    console.log("Field value : ", row);
    // const record = data.movies.filter((item) => item.id === row.id);
    // navigate(`${url}/${param.row.id}`, { state: param.row });
  };

  const handleSearchCallback = (searchWords) => {
    setApiParams({ ...apiParams, rating: searchWords });
  };

  // 실행 버튼을 누른경우 API 호출할 수 있도록 한다
  const handleExecuteQuery = () => {
    console.log("handleExecuteQuery call...");

    setData({ movie_count: 0, movies: [] });
    setApiParams({ ...apiParams, page: 1 });
    setApiCall((prev) => !prev);
  };

  return (
    <Box m="20px 20px 0" {...props} height="100vh">
      {loading ? (
        <MuiProgressWithValueLabel size={200} />
      ) : (
        !error && (
          <MuiDataGrid
            loading={loading}
            rows={data.movies}
            rowCount={data.movie_count}
            columns={columns}
            sort={{ field: "rating", orderby: "desc" }}
            onPageChange={handleOnPageChange}
            onRowClick={handleRowClick}
            component={
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box flex={1.2} mr={0.2}>
                  <MuiSearch startIcon callback={handleSearchCallback} />
                </Box>
                <Box flex={1.8}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="ko"
                  >
                    <Stack direction="row" spacing={0.2}>
                      <MuiPcDatePicker
                        name="sdate"
                        label="시작일"
                        value={apiParams.sdate}
                        onChange={(value) =>
                          setApiParams({ ...apiParams, sdate: dayjs(value) })
                        }
                      />
                      <MuiPcDatePicker
                        name="edate"
                        label="종료일"
                        value={apiParams.edate}
                        onChange={(value) =>
                          setApiParams({ ...apiParams, edate: dayjs(value) })
                        }
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <Box flex={0.2} ml={0.4}>
                  <MuiSubButton
                    name="create"
                    title="실행"
                    medium={true}
                    onClick={handleExecuteQuery}
                  />
                </Box>
              </Box>
            }
            activeTools={["column", "filter", "export"]}
            // 검색어 입력, 날짜를 변경한 경우만 page:1로 설정됨.
            // 이 정보를 기준으로 하단의 page를 1페이지로 이동시킬 수 있음
            pageInit={apiParams.page === 1 ? true : false}
          />
        )
      )}
      {error && <MuiAlert msg={error} />}
    </Box>
  );
};

export default FormList;
