const express = require('express');
const app = express();
const starCafeRoutes = require('./src/routes/starCafeRoutes');

app.use(express.json());
app.use('/api', starCafeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});