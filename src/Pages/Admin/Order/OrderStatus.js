import React from 'react';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
const OrderStatus = ({item}) => {
          const handleStatus = (event) => {
                    console.log(event.target.value);
                    fetch('https://gentle-gorge-81848.herokuapp.com/update')
                    .then(res => res.json())
                    .then(data => console.log(data));
                  }
          return (
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <NativeSelect
                          onChange={handleStatus}
                          defaultValue={30}
                          inputProps={{
                            name: "status",
                            id: "uncontrolled-native",
                          }}
                        >
                        <option value="pending">{item.courseInfo.status}</option>
                        <option value="ongoing">On going</option>
                        <option value="done">Done</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
          );
};

export default OrderStatus;