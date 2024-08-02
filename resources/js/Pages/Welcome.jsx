import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home Page" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <h1>Kronos HR</h1>
            </div>
        </>
    );
}
