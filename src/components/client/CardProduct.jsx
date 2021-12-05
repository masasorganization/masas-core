import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Typography from "@mui/material/Typography"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Box from "@mui/material/Box"
import { Grid, Button } from "@mui/material";
import { useHistory } from 'react-router-dom'
import esLocale from "date-fns/locale/es"
import { Link } from "react-router-dom"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import DatePicker from "@mui/lab/DatePicker"
import React from "react"
import Beetroot from "../../assets/beetroot-cake-org1.jpg"
//import Autocomplete from '@mui/material/Autocomplete'
import TextField from "@mui/material/TextField"
//import CloseIcon from '@mui/icons-material/Close';
import MenuItem from "@mui/material/MenuItem"
import Modal from '@mui/material/Modal';
import FormClient from "./FormClient"
import datosPedidos from "./datosPedidos"
import Swal from 'sweetalert2';
import axios from 'axios';

//import FormProduct from './FormProduct'
//import datosPedidos from "./datosPedidos"
//import axios from "axios"

function CardProduct(props) {
  const [expanded, setExpanded] = React.useState(false)
  const click = () => {
    setExpanded(!expanded)
  }

  const [valorFinal, setValorFinal] = React.useState(props.valor)

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ boxShadow: "0", mt: "1rem", ml: "1rem", mr: "1rem" }}>
          <CardMedia
            sx={{
              height: {
                sm: "350px",
                xs: "230px"
              }
            }}
            component='img'
            image={Beetroot}
            alt='Torta de remolacha'
          />
          <CardContent sx={{ border: "2px solid #460020" }}>
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                color: "#460020",
                fontSize: "1.25rem",
                mt: "1rem"
              }}
            >
              {props.nombrePto}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                fontSize: "1.25rem",
                mt: "0.7rem"
              }}
            >
              {"$"}
              {valorFinal}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  mt: "1rem",
                  mr: "1rem",
                  width: {
                    md: "40%",
                    xs: "35%"
                  }
                }}
              >
                {props.descripcion}
              </Typography>
              <Box
                sx={{
                  width: {
                    md: "60%",
                    xs: "65%"
                  }
                }}
              >
                <FormProduct
                  valor={props.valor}
                  nombrePto={props.nombrePto}
                  otroValor={valorFinal}
                  calculoValor={(valorFinal) => setValorFinal(valorFinal)}
                />
              </Box>
            </Box>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "700",
                    fontSize: "1.25rem",
                    mt: "0.5rem"
                  }}
                >
                  Ingredientes
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "1.1rem",
                    mt: "0.5rem"
                  }}
                >
                  {props.ingredientes}
                </Typography>
              </CardContent>
            </Collapse>
          </CardContent>
          <CardActions sx={{ bgcolor: "#460020" }} disableSpacing>
            <div className='icon-exp'>
              <Box
                onClick={click}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontFamily: "Noto Sans, sans-serif"
                  }}
                >
                  Ingredientes
                </Typography>
                <ExpandMore
                  sx={{
                    color: "#ffffff",
                    fontSize: "2rem",
                    textAlign: "center",
                    ":hover": {
                      color: "#aa3d72"
                    }
                  }}
                  expand={expanded}
                  onClick={click}
                  aria-expanded={expanded}
                  aria-label='more'
                />
              </Box>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

function FormProduct(props) {
  // const URL = "http://localhost:3004/Productos"

  // const getData = async () => {
  //   const response = axios.get(URL)
  //   return response
  // }

  
  const [seleccionTamaño, setSeleccionTamaño] = React.useState("")

  const cambioTamaño = (event) => {
    setSeleccionTamaño(event.target.value)
    handleInputChange(event.target)
  }

  const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [openConfirmed, setOpenConfirmed] = React.useState(false)
    const handleOpenConfirmed = () => setOpenConfirmed(true)
    const handleCloseConfirmed = () => setOpenConfirmed(false)
  // const enviarInformacion = () => {

   




  // }

  
  

  const seleccionarSize = [
    {
      value: "x8 porciones",
      label: "x8 porciones"
    },
    {
      value: "x12 porciones",
      label: "x12 porciones"
    }
  ]

  const [seleccionUnidades, setSeleccionUnidades] = React.useState("")

  const cambioUnidades = (event) => {
    setSeleccionUnidades(event.target.value)
    handleInputChange(event.target)
  }

  const seleccionarUnits = [
    {
      value: 1,
      label: "1"
    },
    {
      value: 2,
      label: "2"
    },
    {
      value: 3,
      label: "3"
    },
    {
      value: 4,
      label: "4"
    },
    {
      value: 5,
      label: "5"
    },
    {
      value: 6,
      label: "6"
    },
    {
      value: 7,
      label: "7"
    },
    {
      value: 8,
      label: "8"
    },
    {
      value: 9,
      label: "9"
    },
    {
      value: 10,
      label: "10"
    }
  ]

  const [seleccionToppings, setSeleccionToppings] = React.useState("")

  const cambioToppings = (event) => {
    setSeleccionToppings(event.target.value)
    handleInputChange(event.target)
  }

  const seleccionarToppings = [
    {
      value: "Gajos de naranja dulce",
      label: "Gajos de naranja dulce"
    },
    {
      value: "Jalea de ciruela",
      label: "Jalea de ciruela"
    },
    {
      value: "Nueces picadas",
      label: "Nueces picadas"
    },
    {
      value: "Salsa de chocolate",
      label: "Salsa de chocolate"
    },
    {
      value: "Zanahorias asadas",
      label: "Zanahorias asadas"
    }
  ]

  const [estadoBoton, setEstadoBoton] = React.useState(false)

  let a
  let b
  let c

  if (estadoBoton === true) {
    a = "#9bd816"
    b = "Añadido"
    c = "#85B816"
  } else {
    a = "#ff823b"
    b = "Añadir"
    c = "#ff4e00"
  }

  let v = props.valor

  let totalTamano = 20000
  let totalCantidad = 1
  let totalToppings = 500

  // Calculo del precio sobre el tamaño
  if (seleccionTamaño === "x8 porciones") {
    totalTamano = totalTamano
  } else if (seleccionTamaño === "x12 porciones") {
    totalTamano = 25000
  }
  let totalCompra = ((totalTamano*totalCantidad)+totalToppings)

  // Calculo del precio sobre el tamaño
  if (seleccionTamaño === "x8 porciones") {
    v = v + 0
  } else if (seleccionTamaño === "x12 porciones") {
    v = v + 5000
    
  }

  // Calculo del precio sobre las unidades
  if (seleccionUnidades === 1) {
    v = v * 1
  } else if (seleccionUnidades === 2) {
    v = v * 2
  } else if (seleccionUnidades === 3) {
    v = v * 3
  } else if (seleccionUnidades === 4) {
    v = v * 4
  } else if (seleccionUnidades === 5) {
    v = v * 5
  } else if (seleccionUnidades === 6) {
    v = v * 6
  } else if (seleccionUnidades === 7) {
    v = v * 7
  } else if (seleccionUnidades === 8) {
    v = v * 8
  } else if (seleccionUnidades === 9) {
    v = v * 9
  } else if (seleccionUnidades === 10) {
    v = v * 10
  }

  // Calculo del precio sobre los topping
  if (seleccionToppings === "Gajos de naranja dulce") {
    v = v + 500
  } else if (seleccionToppings === "Jalea de ciruela") {
    v = v + 1000
  } else if (seleccionToppings === "Nueces picadas") {
    v = v + 1500
  } else if (seleccionToppings === "Salsa de chocolate") {
    v = v + 2000
  } else if (seleccionToppings === "Zanahorias asadas") {
    v = v + 2500
  }

  function primerCalculo(a) {
    if (seleccionTamaño === "x8 porciones") {
      a = a + 0
    } else if (seleccionTamaño === "x12 porciones") {
      a = a + 5000
    }
    return a
  }

  function segundoCalculo(a) {
    if (seleccionUnidades === 1) {
      a = a * 1
    } else if (seleccionUnidades === 2) {
      a = a * 2
    } else if (seleccionUnidades === 3) {
      a = a * 3
    } else if (seleccionUnidades === 4) {
      a = a * 4
    } else if (seleccionUnidades === 5) {
      a = a * 5
    } else if (seleccionUnidades === 6) {
      a = a * 6
    } else if (seleccionUnidades === 7) {
      a = a * 7
    } else if (seleccionUnidades === 8) {
      a = a * 8
    } else if (seleccionUnidades === 9) {
      a = a * 9
    } else if (seleccionUnidades === 10) {
      a = a * 10
    }
    return a
  }

  function tercerCalculo(a) {
    if (seleccionToppings === "Gajos de naranja dulce") {
      a = a + 500
    } else if (seleccionToppings === "Jalea de ciruela") {
      a = a + 1000
    } else if (seleccionToppings === "Nueces picadas") {
      a = a + 1500
    } else if (seleccionToppings === "Salsa de chocolate") {
      a = a + 2000
    } else if (seleccionToppings === "Zanahorias asadas") {
      a = a + 2500
    }
    return a
  }

  let valorfinalfinalfinal = tercerCalculo(segundoCalculo(primerCalculo(50000)))

  // console.log(primerCalculo(props.valor))
  //console.log(segundoCalculo(props.valor))
  // console.log(tercerCalculo(props.valor))

  console.log(valorfinalfinalfinal)

  // const valorFinal = props.otroValor

  const [datosFormulario, setDatosFormulario] = React.useState({
    categoria: "",
    nombrePto: props.nombrePto,
    tamano: "",
    complementos: "",
    unidades: "",
    valorFinal: totalCompra,
    nombres: "",
    apellidos: "",
    tipoDeDocumento:"",
    numeroDocumento: "",
    direccion: "",
    numeroCasa: "",
    barrio: "",
    telefono: "",
    fechaDeEntrega: ""

  })

  const idclient = [
    { value: "Seleccione un Documento", laber: "NONE"},
    { value: "Cédula de ciudadanía", label: "CC" },
    { value: "Cédula de extranjería", label: "CE" },
    { value: "Tarjeta de identidad", label: "TI" },
    { value: "Nit empresarial", label: "NIT" },
    { value: "Pasaporte", label: "P" }
  ]

  const localeMap = { es: esLocale }
  const date = { es: "__/__/____" }
  const [locale] = React.useState("es")
  const [value, setValue] = React.useState(null)
  const [id, setId] = React.useState("Seleccione un Documento")

  

  // console.log(datosFormulario)
  const handleInputChange = (target) => {
    setDatosFormulario({...datosFormulario, [target.name]: target.value})
  }

  const handleChange = e => {
    setDatosFormulario({...datosFormulario, [e.target.name]: e.target.value})
  }

  const handleDate = (target) => {
    setValue({...datosFormulario, [target.name]: target.value})
  }

  const history = useHistory();

  const handleSubmit = async () => {
    // event.preventDefault();
    const response = await axios.post('/ventas/crear', datosFormulario)
    if (response.status === 200){
        Swal.fire(
            'Guardado!',
            `El registro ha sido guardado exitosamente!`,
            'success'
        )
        history.push('/deliveryconf')
        // handleCerrar()
        // history.push('/prueba')
    }else{
        Swal.fire(
            'Error!',
            'Hubo un problema al crear el registro!',
            'error'
        )
    } 
}

  console.log(handleSubmit)
  // const handleDate = {
  //   setDatosFormulario
  // }

  // const enviarInformacion = () => {
  //   localStorage.setItem(["Productos"], JSON.stringify(datosFormulario))
  // }

  // let cadaPedido = [{ Productos: "Holaa?" }]
  // const arrayPrueba = []
console.log(datosFormulario)
  return (
    <div onload={props.calculoValor(v)}>
      {/* <TextField
        id='value-product'
        onChange={(event) =>{ handleInputChange(event.target.name)}}
        value={props.otroValor}
        name='valor'
        sx={{  }}
      >
      </TextField> */}

      <Modal open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        {/* <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
           <Button onClick={handleClose}><CloseIcon></CloseIcon></Button>
        </Box> */}

        {/* <FormClient datosC={datosFormulario}> 
        <Button
         onClick={() => handleClose()}
         sx={{
           bgcolor: "#ff4e00",
           color: "#ffffff",
           textTransform: "none",
           borderRadius: "10px",
           boxShadow: "0",
           mt: "1rem",
           width: "18rem",
           fontFamily: "Noto Sans, sans-serif",
           fontSize: {
             md: "1.1rem",
             xs: "1rem"
           },
           fontWeight: "700",
           ":hover": {
             bgcolor: "#b70030"
           }
         }}
       >
         Cerrar
       </Button>
       
        
       </ FormClient>  */}
       {/* <Container > */}
       
       <Box
       sx={{
        bgcolor: "white",
        justifyContent: 'center'
      }}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                pt: "1.3rem",
                ml: "1rem",
                fontFamily: "Nunito, sans-serif",
                fontSize: "1.2rem",
              }}
            >
              <Typography sx={{ fontWeight: "700" }} h3>
                Formulario de datos
              </Typography>
              <Typography sx={{ color: "#c30500" }} h4>
                * Campo de datos obligatorio
              </Typography>
            </Typography>
          </Grid>
          <Box
        sx={{display: "flex",
        flexDirection: {
          md: "row",
          xs: "column"
        }}}>
          <Box sx={{
              p: "2rem",
              width: {
                md: "50%",
                xs: "78%"
              },
              bgcolor: "white",
              display: "flex",
              flexDirection: "column"
            }}>
            <Typography sx={{ mb: "0.5rem" }}>
              Datos personales para generar recibo:
            </Typography>
            <TextField
              name="nombres"
              sx={{ mb: "1rem" }}
              variant='outlined'
              type="text"
              label='Nombres'
              required={true}
              value={datosFormulario.nombres}
              onChange={handleChange}
            />
            <TextField
              name="apellidos"
              sx={{ mb: "1rem" }}
              variant='outlined'
              type="text"
              label='Apellidos'
              required={true}
              value={datosFormulario.apellidos}
              onChange={handleChange}
            />
            <TextField
              name="tipoDeDocumento"
              sx={{ mb: "1rem" }}
              select
              variant='outlined'
              value={datosFormulario.tipoDeDocumento}
              onChange={handleChange}
              label='Tipo de documento'
              required={true}
            >
              {idclient.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="numeroDocumento"
              variant='outlined'
              label='Número de Documento'
              required={true}
              helperText='Sin puntos (.) ni guiones (-) nit completo'
              value={datosFormulario.numeroDocumento}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              m: "2rem",
              width: {
                md: "50%",
                xs: "78%"
              },
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography sx={{ mb: "0.5rem" }}>Datos de entrega:</Typography>
            <TextField
              name="direccion"
              sx={{ mb: "1rem" }}
              variant='outlined'
              label='Dirección'
              required={true}
              helperText='Ej: Calle 20 sur # 2-28 o Carrera 13 este # 4-55'
              value={datosFormulario.direccion}
              onChange={handleChange}
            />
            <TextField
              name="numeroCasa"
              sx={{ mb: "1rem" }}
              variant='outlined'
              label='Número casa, apto, oficina'
              helperText='Ej: Torre 1 bloque b ap 202'
              value={datosFormulario.numeroCasa}
              onChange={handleChange}
            />
            <TextField
              name="barrio"
              sx={{ mb: "1rem" }}
              variant='outlined'
              label='Barrio'
              required={true}
              value={datosFormulario.barrio}
              onChange={handleChange}
            />
            <TextField
              name="telefono"
              sx={{ mb: "1rem" }}
              variant='outlined'
              label='Celular'
              required={true}
              value={datosFormulario.telefono}
              onChange={handleChange}
            />
            <TextField
              name="fechaDeEntrega"
              sx={{ mb: "1rem" }}
              variant='outlined'
              label='Fecha De Entrega'
              required={true}
              value={datosFormulario.fechaDeEntrega}
              onChange={handleChange}
            />
            {/* <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={localeMap[locale]}
            >
              <DatePicker
                name="fechaDeEntrega"
                mask={date[locale]}
                label='Fecha de entrega'
                value={datosFormulario.fechaDeEntrega}
                onChange={(newValue) => setValue(newValue)}
                // onload={handleDate}
                renderInput={(params) => (
                  <TextField {...params} required={true} />
                )}
              />
            </LocalizationProvider> */}
          </Box>
        </Box>
        <Button sx={{...StyleButtonCancelar}} onClick={() => handleClose()}>Cancelar</Button>
        <Button sx={{...StyleButtonOk}} onClick={() => handleSubmit()}>continuar</Button>
        <Modal open={openConfirmed}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                md: "40%",
                xs: "70%"
              },
              bgcolor: "#ffffff",
              border: "2px solid #000",
              p: "2rem"
            }}
          >
            <Typography
              sx={{ fontWeight: "700", textAlign: "center" }}
              id='title-modal'
            >
              Enviar la solicitud contra-entrega
            </Typography>
            <Typography
              sx={{ mt: "0.5rem", textAlign: "center", mb: "2rem" }}
              id='description-modal'
            >
              ¿Verificaste muy bien todos tus datos para la entrega del producto?
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <div className='btn-client'>
                  <Button
                    onClick={handleSubmit}
                    sx={{
                      bgcolor: "#ff4e00",
                      color: "#ffffff",
                      borderRadius: "10px",
                      boxShadow: "0",
                      mt: "1rem",
                      mr: {
                        md: "2rem",
                        xs: "0"
                      },
                      textTransform: "none",
                      width: "15rem",
                      fontFamily: "Noto Sans, sans-serif",
                      fontSize: {
                        md: "1.1rem",
                        xs: "1rem"
                      },
                      fontWeight: "700",
                      ":hover": {
                        bgcolor: "#9bd816"
                      }
                    }}
                  >
                    Ok, enviar solicitud
                  </Button>
                <Button
                  onClick={() => handleCloseConfirmed()}
                  sx={{
                    bgcolor: "#c30500",
                    color: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0",
                    mt: "1rem",
                    textTransform: "none",
                    width: "15rem",
                    fontFamily: "Noto Sans, sans-serif",
                    fontSize: {
                      md: "1.1rem",
                      xs: "1rem"
                    },
                    fontWeight: "700",
                    ":hover": {
                      bgcolor: "#9bd816"
                    }
                  }}
                >
                  No, quiero revisar
                </Button>
              </div>
            </Box>
          </Box>
        </Modal>
      </Box>
      
      </Modal>

      <TextField
        id='size-product'
        select
        placeholder='Tamaño'
        label='Tamaño'
        value={seleccionTamaño}
        onChange={cambioTamaño}
        name='tamano'
        sx={{ width: "100%" }}
      >
        {seleccionarSize.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='units-product'
        select
        placeholder='Unidades'
        label='Unidades'
        value={seleccionUnidades}
        onChange={cambioUnidades}
        name='unidades'
        sx={{ width: "100%", mt: "0.6rem" }}
      >
        {seleccionarUnits.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id='toppings-product'
        select
        placeholder='toppings'
        label='Toppings'
        value={seleccionToppings}
        onChange={cambioToppings}
        name='complementos'
        sx={{ width: "100%", mt: "0.6rem" }}
      >
        {seleccionarToppings.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <div className='btn-client'>
        <Button
          onClick={() => {
            handleOpen()
            setEstadoBoton(!estadoBoton)
            // setOpen(true)
            console.log(open)
          }}
          // onClick={() => arrayPrueba.push(cadaPedido)}
        
          style={{ bgcolor: a ? "#9bd816" : "#ff823b" }}
          sx={{
            bgcolor: a,
            textTransform: "none",
            width: { xs: "100%" },
            mt: "1rem",
            color: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0",
            fontFamily: "Noto Sans, sans-serif",
            fontSize: {
              md: "1.1rem",
              xs: "1rem"
            },
            fontWeight: "700",
            ":hover": {
              bgcolor: c
            }
          }}
        >
          {b}
        </Button>
        {/* <Button onClick={() => console.log(arrayPrueba)}>LocalS</Button> */}
      </div>
    </div>
  )
}

export default CardProduct


const StyleButtonOk = {
    bgcolor: "#ff4e00",
    color: "#ffffff",
    textTransform: "none",
    borderRadius: "10px",
    boxShadow: "0",
    mt: "1rem",
    width: "18rem",
    fontFamily: "Noto Sans, sans-serif",
    fontSize: {
      md: "1.1rem",
      xs: "1rem"
    },
    fontWeight: "700",
    ":hover": {
      bgcolor: "#b70030"
    }
};

const StyleButtonCancelar = {
  bgcolor: "#c30500",
  color: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0",
  mt: "1rem",
  textTransform: "none",
  width: "18rem",
  fontFamily: "Noto Sans, sans-serif",
  fontSize: {
    md: "1.1rem",
    xs: "1rem",
  },
  fontWeight: "700",
    ":hover": {
  bgcolor: "#ff823b",
  },
}
