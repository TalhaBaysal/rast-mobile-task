import Box from "@mui/material/Box";
import DataTable from "./../components/DataTable";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: "800px",
        background:
          "linear-gradient(180deg, #EFF2FF -30.56%, rgba(232, 236, 255, 0) 135.85%)",
        borderRadius: "6px",
        marginTop: "1rem",
      }}
    >
      <DataTable />
    </Box>
  );
};

export default Dashboard;
