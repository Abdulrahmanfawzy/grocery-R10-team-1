import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import CreateAddress from "@/components/profile/addresses/CreateAddress";
import EditAddress from "@/components/profile/addresses/EditAddress";
import PreferredTime from "@/components/profile/addresses/PreferredTime";
import EmptyState from "@/components/profile/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import { useDeleteAddress } from "@/lib/api/profile/Addresses/use-deleteAddress";
import { useGetAddress } from "@/lib/api/profile/Addresses/use-getAddress";
import type { AddressesInterface } from "@/types/profile/Addresses/AddressTypes";
import { Home, LoaderCircle, Pencil, Plus, Trash2 } from "lucide-react";

const Addresses = () => {
  const { data, isLoading, isError } = useGetAddress();
  const { mutate: deleteAddress, isPending } = useDeleteAddress();
  if (isLoading) return <Loading />;
  if (isError) return <Error error={data.message} />;
  const addresses: AddressesInterface = isLoading ? [] : data;

  function handleDelete(id: number) {
    deleteAddress(id);
  }
  return (
    <div className="mt-12">
      <div className="flex items-center  justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Delivery Addresses
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your delivery locations and preferences
          </p>
        </div>
        <CreateAddress />
      </div>
      {addresses.data.length > 0 ? (
        addresses.data.map((addr) => (
          <div
            key={addr.label}
            className="bg-card rounded-lg border border-border p-6 my-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-card-foreground" />
                <h2 className="font-semibold text-card-foreground">
                  {addr.full_address}
                </h2>
              </div>
              <div className="flex gap-2">
                <EditAddress
                  key={addr.id}
                  id={addr.id}
                  defaultValues={{
                    full_name: addr.full_name,
                    phone: addr.phone,
                    street_address: addr.street_address,
                    city: addr.city,
                  }}
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="cursor-pointer"
                  onClick={() => handleDelete(addr.id)}
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <LoaderCircle className="animate-spin w-4" /> Deleting
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Trash2 className="w-3 h-3 mr-1" /> Cancel
                    </span>
                  )}
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {addr.full_name}
            </p>
            {addr.notes && (
              <div className="bg-muted rounded-lg p-3">
                <p className="text-sm font-medium text-primary">
                  📋 Delivery Notes
                </p>
                <p className="text-sm text-muted-foreground ms-2 mt-2">
                  {addr.notes}
                </p>
              </div>
            )}
          </div>
        ))
      ) : (
        <EmptyState
          icon={Home}
          title="Addresses"
          description="You have no stored addresses"
          actionLabel="Create Address"
        />
      )}
      {/* Preferred Delivery */}
      <PreferredTime />
    </div>
  );
};

export default Addresses;
