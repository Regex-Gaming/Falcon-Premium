// Falcron | AeroX Development
// Author: itsfizys
export const config = {
        token: process.env.DISCORD_TOKEN || 'MTUzMDY0NDk5MjQ3MTYwMTE3Mg.GhUpDn.XX2MaUWVvaZJNcJ3ngQe4lEANXKU7DJ3Jb2kdg',
        clientId: process.env.DISCORD_CLIENT_ID || '1530644992471601172',
        prefix: '-',
        ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : [],
        ownerOnly: false,

        links: {
                supportServer: 'https://discord.gg/Ez4gCJQDxB',
                invite: 'https://discord.com/oauth2/authorize?client_id=1530644992471601172',
        },

        cache: {
                maxSize: process.env.NODE_ENV === 'production' ? 100000 : 50000,
                flushOnStart: false,
                flushOnShutdown: false,
        },

        database: {
                uri: process.env.MONGODB_URI || 'al-Oj1Bl9xfsNnfjq4Rtx8EPBxHlVqQyYclDp95RcxyR4S',
        },

        presence: {
                status: 'idle',
                activity: {
                        name: '-help || AeroX Development',
                        type: 'Custom',
                },
        },

        watermark: '',
        version: '1.0.0',
};

/**
 * Project: Falcron
 * Author: itsfizys (Aegis)
 * Organization: AeroX Development
 * GitHub: https://github.com/AeroXDevs
 * License: Custom
 *
 * © 2026 AeroX Development. All rights reserved.
 */
