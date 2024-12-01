import React, { useState, useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || senha.trim() === '') {
      alert('Todos os campos são obrigatórios.');
      return;
    }
    login(email, senha)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 8,
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '300px' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
        <Link component={RouterLink} to="/registrar" variant="body2">
          Não tem uma conta? Registre-se
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
