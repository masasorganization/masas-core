import * as React from 'react'
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

const ProductManager = () => {
  let [acordeonIzqActivo, setAcordeonIzqActivo] = React.useState(false)
  let [acordeonDerActivo, setAcordeonDerActivo] = React.useState(false)
  let [primeraVez, setPrimeraVez] = React.useState(true)

  const cambioIzquierdo = () => {
    setAcordeonIzqActivo(!acordeonIzqActivo)
  }

  const cambioDerecho = () => {
    setAcordeonDerActivo(!acordeonDerActivo)
  }

  return (
    <Box onClick={() => setPrimeraVez(false)} sx={{ ...pantallaCompleta }}>
      <Box sx={{ ...contenedorSuperior }}>
        <Box sx={{ ...contenedorTitulos }}>
          <Cuerpo sx={{ ...tituloCuerpo }}>Editar </Cuerpo>
          <Resaltado sx={{ ...tituloResaltado }}>Producto</Resaltado>
        </Box>

        <Box sx={{ ...contenedorBotones }}>
          <Button variant='contained' sx={{ ...botonSecundario }}>
            Cancelar
          </Button>
          <TooltipInferior
            title={textoTooltip}
            arrow
            open={primeraVez}
            sx={{ ...flechaTooltip }}
          >
            <Button variant='contained' sx={{ ...botonPrimario }}>
              Actualizar producto
            </Button>
          </TooltipInferior>
        </Box>
      </Box>

      <Box sx={{ ...contenedorAcordeones }}>
        <Grid
          container
          rowSpacing={{ xs: '10px' }}
          columnSpacing={{ xs: 0, md: '96px' }}
          sx={{ cuadriculaResponsive }}
        >
          <TooltipCentral
            title={textoTooltip2}
            arrow
            open={primeraVez}
            sx={{ ...flechaTooltip }}
          >
            <Grid item xs={12} md={6}>
              <Accordion elevation={0} sx={{ ...acordeon }}>
                <AccordionSummary
                  onClick={() => cambioIzquierdo()}
                  expandIcon={
                    <ExpandMore
                      sx={{ color: acordeonIzqActivo ? '#ffffff' : '#666666' }}
                    />
                  }
                  aria-label='Expand'
                  aria-controls='-content'
                  id='-header'
                  sx={{
                    ...acordeones,
                    bgcolor: acordeonIzqActivo ? '#05B3B2' : 'transparent'
                  }}
                >
                  <Typography
                    sx={{
                      ...tituloAcordeon,
                      color: acordeonIzqActivo ? '#ffffff' : '#666666'
                    }}
                  >
                    <b>Informaci??n general</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ...acordeonInterno }}>
                  <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                    <DatosProducto />
                  </Container>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </TooltipCentral>
          <Grid item xs={12} md={6}>
            <Accordion elevation={0} sx={{ ...acordeon }}>
              <AccordionSummary
                onClick={() => cambioDerecho()}
                expandIcon={
                  <ExpandMore
                    sx={{ color: acordeonDerActivo ? '#ffffff' : '#666666' }}
                  />
                }
                aria-label='Expand'
                aria-controls='-content'
                id='-header'
                sx={{
                  ...acordeones,
                  bgcolor: acordeonDerActivo ? '#05B3B2' : 'transparent'
                }}
              >
                <Typography
                  sx={{
                    ...tituloAcordeon,
                    color: acordeonDerActivo ? '#ffffff' : '#666666'
                  }}
                >
                  Im??gen
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ ...acordeonInterno }}>
                <Container maxWidth='mb' sx={{ ...contenedorFormulario }}>
                  Aqu?? va el componente de im??genes
                </Container>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProductManager

// Componentes de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

// Componentes tooltip modificados
const TooltipCentral = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    top: '20px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '13px',
    maxWidth: 300,
    textAlign: 'center',
    backgroundColor: '#05B3B2'
  }
})

const TooltipInferior = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    right: '10px',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '12px',
    maxWidth: 400,
    textAlign: 'center',
    backgroundColor: '#05B3B2'
  }
})

// Componentes de formulario

let textoTooltip = 'Este bot??n se activar?? al ingresar toda la informaci??n.'
let textoTooltip2 =
  'Ingrese la informaci??n del producto pulsando en alguna de las dos secciones.'

function DatosProducto() {
  const [seleccionCategorias, setSeleccionCategorias] = React.useState('')
  const [seleccionTama??o, setSeleccionTama??o] = React.useState('')

  const cambioCategoria = (event) => {
    setSeleccionCategorias(event.target.value)
  }

  const cambioTama??o = (event) => {
    setSeleccionTama??o(event.target.value)
  }

  const categorias = [
    {
      value: 'Sin az??car',
      label: 'Sin az??car'
    },
    {
      value: 'Masa saludable',
      label: 'Masa saludable'
    },
    {
      value: 'Tipo org??nico',
      label: 'Tipo org??nico'
    }
  ]

  const tama??os = [
    {
      value: 'x8',
      label: 'x8'
    },
    {
      value: 'x16',
      label: 'x16'
    }
  ]
  return (
    <>
      <TextField
        id='categoriaProducto'
        select
        label='Categoria'
        value={seleccionCategorias}
        onChange={cambioCategoria}
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        helperText='Seleccione una categoria.'
        //required='true'
      >
        {categorias.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='nombreProducto'
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Nombre'
        helperText='Escriba el nombre del producto.'
        //required='true'
      />

      <TextField
        id='tama??oProducto'
        select
        label='Tama??o'
        value={seleccionTama??o}
        onChange={cambioTama??o}
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        helperText='Seleccione la cantidad de porciones del producto.'
        //required='true'
      >
        {tama??os.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='valorProducto'
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Valor'
        helperText='Escriba el valor del producto.'
        //required='true'
      />

      <TextField
        id='descripcionProducto'
        multiline
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Descripci??n'
        helperText='Escriba una descripci??n del producto.'
        //required='true'
      />

      <TextField
        id='ingredientesProducto'
        multiline
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Ingredientes'
        helperText='Escriba todos los ingredientes del producto.'
        //required='true'
      />
    </>
  )
}

function DatosCliente() {
  return (
    <>
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Nombre completo'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Tipo de documento'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='N??mero de documento'
        //required='true'
        //helperText='Sin puntos (.) ni guiones (-) nit completo'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Direcci??n'
        //required='true'
        //helperText='Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='N??mero casa, apto, oficina'
        //helperText='Ej: Torre 1 bloque b ap 202'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Barrio'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Celular'
        //required='true'
      />
      <TextField
        sx={{ ...camposTexto, mb: '12px' }}
        variant='standard'
        label='Fecha de entrega'
        //required='true'
      />
    </>
  )
}

// Estilos en variables

const pantallaCompleta = {
  px: {
    md: '94px',
    xs: '10px'
  }
}

const contenedorSuperior = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: { xs: '55px', md: '143px' },
  width: '100%'
}

const contenedorTitulos = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}

const cuadriculaResponsive = {
  justifyContent: 'space-between'
}

// estilos de acordeones

const contenedorAcordeones = {
  display: 'flex',
  justifyContent: 'space-between',
  pb: '80px'
}

const acordeon = {
  maxWidth: {
    xs: '100%',
    lg: '839px'
  },
  border: 'solid gray 1px'
}

const tituloAcordeon = {
  fontFamily: 'Noto Sans, sans-serif',
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '0.3px',
  lineHeight: 0
}

const acordeonInterno = {
  px: {
    md: '0',
    xs: '10px'
  }
}

const contenedorFormulario = {
  px: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left'
}

const acordeones = {
  px: {
    md: '24px',
    xs: '10px'
  }
}

const camposTexto = {
  '& .MuiInput-input': {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: '1px'
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.3px',
    '&.Mui-focused': {
      color: '#00928e'
    }
  },
  '& .MuiFormHelperText-root': {
    fontSize: '0.70rem'
  },
  '& .MuiInput-root': {
    '&:after': {
      borderBottom: '2px solid #00928e'
    }
  }
}

const tituloCuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: { xs: '1.125rem', md: '2.25rem' },
  whiteSpace: 'pre-wrap',
  m: 0
}

const tituloResaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: { xs: '1.125rem', md: '2.25rem' },
  color: '#FF823B',
  m: 0
}

const contenedorBotones = {
  position: { xs: 'fixed', md: 'unset' },
  bottom: { xs: '21px', md: 0 },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1
}

const botonPrimario = {
  backgroundColor: '#FF823B',
  borderRadius: '10px',
  width: '270px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#c65306',
    boxShadow: 'none'
  }
}

const botonSecundario = {
  backgroundColor: '#AA3D72',
  borderRadius: '10px',
  width: '129px',
  px: '40px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  mr: '18px',
  '&:hover': {
    backgroundColor: '#770047',
    boxShadow: 'none'
  }
}

const flechaTooltip = {
  '& .MuiTooltip-arrow': {
    ':before': {
      backgroundColor: '#05B3B2'
    }
  }
}
