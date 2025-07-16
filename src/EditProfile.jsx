
import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import kalyaniImg from './assets/kalyani.jpg'; 

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "Kalyani Thurlu",
    email: "kalyanithurlu@gmail.com",
    avatar: kalyaniImg
  });

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(user);

  const handleOpen = () => {
    setForm(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    
    setUser(form);
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ maxWidth: 345, p: 2 }}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt={user.name}
            src={user.avatar}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" align="center">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {user.email}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={handleOpen}>
            Edit Profile
          </Button>
        </CardActions>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Avatar URL"
              value={form.avatar}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
};

export default EditProfile;
