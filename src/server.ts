import app from "./app";
import { PORT } from "./config/secrets";

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
