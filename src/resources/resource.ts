import axios, { AxiosError } from "axios";
const BASE_URL = "/api/";

// Crear una instancia de Axios con configuración predeterminada
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interfaces y tipos
interface CardData {
  CardHolderName: string;
  ExpirationMonth: string;
  ExpirationYear: string;
  CVV2: string;
  CardNumber: string;
  token?: string;
}

interface quoteParams {
  checkIn: string;
  checkOut: string;
  location: string;
  reservation: boolean;
  servicesId: null | string;
  token?: string;
  parkingCategory: string;
}

interface CreateAccountParams {
  userData: PersonalData;
}

interface CreateAccountResponse {
  ErrorMessage: string;
  MemberId: string;
  ResponseMessage: string;
  SignupStatus: string;
  Success: boolean;
  IsException: boolean;
}

interface GetCardsParams {
  token: string;
}

interface GetOptionsParams {
  id: string;
}

interface GetPointsParams {
  token: string;
}

interface GetVehicleParams {
  token: string;
}

interface LocationParams {
  Id: string;
}

interface LoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  expires: string;
  issued: string;
  AutoInvoice: string;
  CustomerId: string;
  DoB: string | null;
  Email: string;
  FirstName: string;
  Gender: string;
  LastName: string;
  Level: string;
  LevelShort: string;
  MemberLevelId: string;
  MemberNo: string;
  MemberSince: string;
  Phone: string;
  Points: number;
  ShareCode: string;
  UpdateRequired: number;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  userName: string;
}

interface LoginSoscialMediaParams {
  plataform: string;
}

interface paramsCancel {
  token: string;
  Reservation_Id: string;
  Cancelled_By: string;
}

interface paramsEstancia {
  token: string;
}

interface paramsDetails {
  reservationId: string;
}

interface paramsEstanciaActiva {
  token: string;
}

interface paramsEstanciaPasada {
  token: string;
}

interface paymentParams {
  token: string;
  cardId: string;
  payWithPoints: boolean;
  pointsUsed: number;
  reservation: Reservation;
}

interface PaymentCardsParams {
  token: string;
}

interface PersonalData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  lada: string;
  verificationChannel: string;
  shareCode: string;
}

interface Reservation {
  location: string;
  checkIn: string;
  checkOut: string;
  isReservation: boolean;
  servicesId: string;
  parkingCategory: string;
}

interface SendCodeParams {
  code: string;
  memberId: string;
  phone: string;
}

interface VehicleData {
  memberId: string;
  color: string;
  licensePlate: string;
  make: string;
  model: string;
  vehicleYear: number;
  token?: string;
}

// Función auxiliar para configurar encabezados
const getHeaders = (token?: string) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

// Funciones API
const addVehicle = async (vehicle: VehicleData): Promise<any> => {
  const data = {
    MemberId: vehicle.memberId,
    Color: vehicle.color,
    LicensePlate: vehicle.licensePlate,
    Make: vehicle.make,
    Model: vehicle.model,
    VehicleYear: vehicle.vehicleYear,
  };

  try {
    const response = await api.post("Vehicle/AddVehicle", data, {
      headers: getHeaders(vehicle.token),
    });
    return response.data;
  } catch (error) {
    console.error("Error al agregar vehículo:", error);
    throw error;
  }
};

const addCard = async (card: CardData): Promise<any> => {
  const data = {
    CardHolderName: card.CardHolderName,
    ExpirationMonth: card.ExpirationMonth,
    ExpirationYear: card.ExpirationYear,
    CVV2: card.CVV2,
    CardNumber: card.CardNumber,
  };

  try {
    const response = await api.post("payment/addCard", data, {
      headers: getHeaders(card.token),
    });
    return response.data;
  } catch (error) {
    console.error("Error al agregar tarjeta:", error);
    throw error;
  }
};

const cancelReservation = async ({
  token,
  Reservation_Id,
  Cancelled_By,
}: paramsCancel) => {
  const data = JSON.stringify({
    CancelledReservation_Reservation_Id: Reservation_Id,
    CancelledReservation_Cancelled_By: Cancelled_By,
  });

  try {
    const response = await api.post("payment/cancel", data, {
      headers: getHeaders(token),
    });
  } catch (error) {
    console.error("Error cancelling reservation:", error);
  }
};

const quote = async ({
  checkIn,
  checkOut,
  location,
  reservation,
  parkingCategory,
  servicesId,
}: quoteParams) => {
  const data = JSON.stringify({
    Location: location,
    CheckIn: checkIn,
    CheckOut: checkOut,
    isReservation: reservation,
    ServicesId: servicesId,
    ParkingCategory: parkingCategory,
    Services: {},
  });

  try {
    const response = await api.post("reservation", data);
    return response.data;
  } catch (error) {
    console.error("Error making the request:", error);
  }
};

const createAccount = async ({
  userData,
}: CreateAccountParams): Promise<CreateAccountResponse> => {
  const telefonoCompleto = `${userData.lada} ${userData.phone}`;
  const data = JSON.stringify({
    Email: userData.email,
    FirstName: userData.firstName,
    LastName: userData.lastName,
    Password: userData.password,
    Phone: telefonoCompleto,
    VerificationChannel: userData.verificationChannel,
    ShareCode: userData.shareCode,
  });

  try {
    const response = await api.post("Account/signup", data);
    return {
      ErrorMessage: response.data.ErrorMessage,
      MemberId: response.data.MemberId,
      ResponseMessage: response.data.ResponseMessage,
      SignupStatus: response.data.SignupStatus,
      Success: response.data.Success,
      IsException: response.data.IsException,
    };
  } catch (error: any) {
    console.error("Error al crear la cuenta:", error);
    if (axios.isAxiosError(error)) {
      console.error("Respuesta del servidor:", error.response?.data);
    }
    return {
      ErrorMessage: error.data.ErrorMessage,
      MemberId: error.data.MemberId,
      ResponseMessage: error.data.ResponseMessage,
      SignupStatus: error.data.SignupStatus,
      Success: error.data.Success,
      IsException: error.data.IsException,
    };
  }
};

const getDetailsReservation = async ({ reservationId }: paramsDetails) => {
  try {
    const response = await api.get(
      `reservation/detail?reservationNumber=${reservationId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw new Error("Error fetching details");
  }
};

const getUpComingStay = async ({ token }: paramsEstancia) => {
  try {
    const response = await api.get("reservations", {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw new Error("Error fetching details");
  }
};

const getActiveStay = async ({ token }: paramsEstanciaActiva) => {
  try {
    const response = await api.get("serviceorders", {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw new Error("Error fetching details");
  }
};

const getPastStay = async ({ token }: paramsEstanciaPasada) => {
  try {
    const response = await api.get("reservationHistory", {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching details:", error);
    throw new Error("Error fetching details");
  }
};

const getVehicle = async ({ token }: GetVehicleParams) => {
  try {
    const response = await api.post("Vehicle/GetVehicle", null, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener vehículos:", error);
    throw error;
  }
};

const loginApi = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse | null> => {
  const data = new URLSearchParams();
  data.append("grant_type", "password");
  data.append("username", email);
  data.append("password", password);

  const config = {
    method: "POST",
    url: "https://iparkgo.mx:8081/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return response.data; // Retorna el response body como LoginResponse
  } catch (error) {
    if (error instanceof AxiosError) {
      // Aquí puedes acceder a las propiedades específicas de AxiosError
      const errorMessage = error.response?.data?.error || "Error desconocido";
      console.error(errorMessage);
    } else {
      // Manejar otros tipos de errores
      console.error("Error inesperado:", error);
    }
    return null; // Retorna null en caso de error
  }
};

const loginSoscialMedia = async ({ plataform }: LoginSoscialMediaParams) => {
  try {
    const response = await api.get(`/account/external-login-flow/Google`);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión con redes sociales:", error);
    throw error;
  }
};

const sendCodeVerification = async ({
  code,
  memberId,
  phone,
}: SendCodeParams) => {
  const data = JSON.stringify({
    MemberId: memberId,
    Phone: phone,
    Code: code,
  });

  try {
    const response = await api.post("Account/Verify", data);
    return response.data;
  } catch (error) {
    console.error("Error al verificar el código:", error);
    throw error;
  }
};

const getLocations = async () => {
  const response = await api.get("locationinfo");
  return response.data;
};

const getLocationDetail = async ({ Id }: LocationParams) => {
  const response = await api.get(`location/detail?id=${Id}`);
  return response.data;
};

const getLocationPrices = async ({ Id }: LocationParams) => {
  const response = await api.post(
    `location/getLocationService?locationId=${Id}`
  );
  return response.data;
};

const getOptions = async ({ id }: GetOptionsParams) => {
  try {
    const response = await api.get("reservation/options");
    const location = response.data.Locations.find(
      (location: { Id: string }) => location.Id === id
    );
    if (location) {
      return location;
    } else {
      throw new Error("Ubicación no encontrada");
    }
  } catch (error) {
    console.error("Error al obtener las opciones de la ubicación:", error);
    throw new Error("Error al obtener los datos de la ubicación");
  }
};

const payment = async ({
  token,
  cardId,
  payWithPoints,
  pointsUsed,
  reservation,
}: paymentParams) => {
  const data = {
    CardId: cardId,
    PayWithPoints: payWithPoints,
    PointsUsed: pointsUsed,
    Reservation: reservation,
  };

  try {
    const response = await api.post("payment/pay", data, {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de pago:", error);
  }
};

const getCards = async ({ token }: GetCardsParams) => {
  try {
    const response = await api.get("payment/cards", {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

const getPoints = async ({ token }: GetPointsParams) => {
  try {
    const response = await api.get("PointsSummary", {
      headers: getHeaders(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener puntos:", error);
    throw error;
  }
};

export {
  addCard,
  addVehicle,
  cancelReservation,
  createAccount,
  getActiveStay,
  getCards,
  getDetailsReservation,
  getLocationDetail,
  getLocations,
  getOptions,
  getPastStay,
  getPoints,
  getUpComingStay,
  getVehicle,
  loginApi,
  loginSoscialMedia,
  payment,
  quote,
  sendCodeVerification,
  getLocationPrices,
};
