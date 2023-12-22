import Card from "@/components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <h1>Default Notifications</h1>
        <div>
          <Link href={"/complex-dashboard/archived"}>
            Archived Notifications
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Notifications;
