import jwt from 'jsonwebtoken';

export const jwtMiddleware = (handler)=> async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token ausente ou inválido' });

    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Armazena os dados do usuário no request
        return handler(req, res); // Continua para o próximo handler
    }catch (error){
        return res.status(401).json({ message: 'Token inválido'});
    }
};
