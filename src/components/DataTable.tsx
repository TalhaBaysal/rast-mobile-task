import React, { useEffect } from "react";
import DataGrid, { Scrolling, Pager, Paging } from "devextreme-react/data-grid";
import Container from "@mui/material/Container";
import {
  Button,
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Add, FilterAlt, Search } from "@mui/icons-material";
import { useState } from "react";
import { Dialog } from "./index.ts";
import ISocialMedia from "../model/ISocialMedia.ts";

// Declare a global extension to the Array interface
declare global {
  interface Array<T> {
    equals(value: T): boolean;
  }
}

// Implement the equals method for Array prototype
Array.prototype.equals = function <T>(value: T): boolean {
  return this.some((item) => item === value);
};

// Array of allowed page sizes for the data grid
const allowedPageSizes = [5, 10, "all"];

// Column configuration for the data grid
const columns = [
  { dataField: "link", caption: "Sosyal Medya Linki" },
  { dataField: "name", caption: "Sosyal Medya Adı" },
  { dataField: "description", caption: "Açıklama" },
];

// Constants for Select component styling
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// DataTable component
const DataTable = () => {
  // State variables
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [filterValue, setFilterValue] = React.useState("");
  const [data, setData] = useState<ISocialMedia[]>([]);
  const [socialMediaNames, setSocialMediaNames] = React.useState<string[]>([]);

  // Fetch data from local storage on component mount
  useEffect(() => {
    const localData = localStorage.getItem("socialMedia");
    localData && setData([...JSON.parse(localData)]);
    // setData([...mockData]);
  }, []);

  // Update options whenever data changes
  useEffect(() => {
    const localData = localStorage.getItem("socialMedia");
    const names =
      localData && [...JSON.parse(localData)].map((item) => item.name);
    setOptions([...new Set(names)]);
  }, [data]);

  // Event handler for filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  // Transform data into the required format for the data grid
  const dataSource = data.map(function (item, index) {
    return { id: index + 1, ...item };
  });

  // Apply filter and selected social media names to the data source
  const filterDataSource = dataSource
    .filter(
      (row) =>
        row.link.toString().includes(filterValue.toLowerCase()) ||
        row.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        row.description.toLowerCase().includes(filterValue.toLowerCase())
    )
    .filter((row) => {
      return socialMediaNames.length
        ? socialMediaNames.includes(row.name)
        : row;
    });

  // Event handler for social media names select change
  const handleChange = (event: SelectChangeEvent<typeof socialMediaNames>) => {
    const {
      target: { value },
    } = event;
    setSocialMediaNames(typeof value === "string" ? value.split(",") : value);
  };

  // Event handler for opening the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Event handler for closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Render the Dialog component */}
      <Dialog open={open} onClose={handleClose} setData={setData} />
      <Container id="container">
        <div id="datagrid-header">
          <div id="search-input">
            {/* Render the search input field */}
            <TextField
              size="small"
              label="Search objects..."
              value={filterValue}
              onChange={handleFilterChange}
              InputProps={{
                endAdornment: <Search id="search-icon" />,
              }}
              style={{
                background: "#ffffff",
                borderRadius: "39px",
              }}
            />
            <div id="filter-icon-container">
              <div id="filter-icon">
                {/* Render the select component for filtering social media names */}
                <Select
                  size="small"
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  input={<OutlinedInput value="" />}
                  value={socialMediaNames}
                  onChange={handleChange}
                  inputProps={{
                    classes: {
                      icon: "filter-icon",
                    },
                  }}
                  IconComponent={FilterAlt}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {/* Render the options for select component */}
                  {options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      <Checkbox
                        checked={socialMediaNames.indexOf(option) > -1}
                      />
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          {/* Render the button for adding a new account */}
          <Button
            style={{ borderRadius: 39 }}
            variant="contained"
            startIcon={<Add />}
            onClick={handleOpen}
          >
            <span style={{ marginTop: 3 }}>Yeni Hesap Ekle</span>
          </Button>
        </div>
        {/* Render the DataGrid component */}
        <DataGrid
          id="gridContainer"
          dataSource={filterDataSource}
          keyExpr="id"
          showBorders={true}
          columns={columns}
        >
          {/* Configure scrolling behavior */}
          <Scrolling rowRenderingMode="virtual" />
          {/* Enable paging with default page size */}
          <Paging defaultPageSize={10} />
          {/* Render pager component */}
          <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode={"compact"}
            showPageSizeSelector={true}
            showNavigationButtons={true}
          />
        </DataGrid>
      </Container>
    </>
  );
};

export default DataTable;
