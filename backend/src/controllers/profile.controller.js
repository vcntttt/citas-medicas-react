export const profile = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({
            id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            rut: user.rut,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const updateProfile = async (req, res) => {
    const userId = req.user.id;
    const { nombre, apellido, rut, role } = req.body;

    try {
        const existingUserWithRut = await User.findOne({ rut: rut, _id: { $ne: userId } });
        if (existingUserWithRut) {
            return res.status(400).json({ message: 'Ya existe un usuario con este RUT.' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { nombre, apellido, rut, role },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({
            id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
            rut: user.rut,
            role: user.role, 
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};