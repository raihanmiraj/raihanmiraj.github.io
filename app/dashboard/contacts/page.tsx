import { getContacts } from "@/lib/data";
import { ContactsInbox } from "@/components/admin/ContactsInbox";
export const dynamic = "force-dynamic";
export default async function ContactsPage() {
  const items = await getContacts();
  return (
    <>
      <div className="dash-heading">
        <div>
          <p className="eyebrow">Inbox</p>
          <h1>Contacts</h1>
        </div>
      </div>
      <ContactsInbox items={items} />
    </>
  );
}
