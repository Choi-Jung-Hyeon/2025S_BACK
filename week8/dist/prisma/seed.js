"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const restaurant1 = await prisma.restaurant.upsert({
        where: { name: '봉수육' },
        update: {},
        create: {
            name: '봉수육',
            address: '경기 수원시 장안구 율전로108번길 11 1층',
            phone: '0507-1460-0903',
        },
    });
    const restaurant2 = await prisma.restaurant.upsert({
        where: { name: '청년밥상' },
        update: {},
        create: {
            name: '청년밥상',
            address: '경기 수원시 장안구 서부로2136번길 10 1층',
            phone: '0507-1307-1822',
        },
    });
    console.log({ restaurant1, restaurant2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map