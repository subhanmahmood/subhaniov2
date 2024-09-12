import { db } from '@/server/db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create categories
    const setupCategory = await db.category.create({
        data: { name: 'Setup Items' },
    });

    const resourcesCategory = await db.category.create({
        data: { name: 'Resources' },
    });

    // Create links
    const links = [
        {
            name: 'Desk Mat (UK)',
            url: 'https://amzn.to/3Lj9Hfa',
            categoryId: setupCategory.id,
        },
        {
            name: 'Desk Mat (US)',
            url: 'https://amzn.to/3JNS3VN',
            categoryId: setupCategory.id,
        },
        {
            name: 'SIHOO Doro S300 Chair',
            url: 'https://amzn.to/3JNS3VN',
            categoryId: setupCategory.id,
        },
        {
            name: 'Resume Writing Kit + Template',
            url: 'https://subhan.gumroad.com/l/resumewritingkit',
            categoryId: resourcesCategory.id,
        },
        {
            name: 'IGNITE - Motivational Wallpaper Pack',
            url: 'https://subhan.gumroad.com/l/ignite',
            categoryId: resourcesCategory.id,
        },
        {
            name: 'Ultimate Habit & Goal Tracker',
            url: 'https://subhan.gumroad.com/l/habittracker',
            categoryId: resourcesCategory.id,
        },
    ];

    for (const link of links) {
        await prisma.link.create({
            data: link,
        });
    }

    console.log('Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        db.$disconnect();
    });