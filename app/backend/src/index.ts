import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

new App().start(PORT);

// App.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
