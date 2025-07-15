import API from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function Main() {
    const submit = async () => {
        const weightInput = document.getElementById(
            "weightInput"
        ) as HTMLInputElement;
        const val = weightInput.value;
        if (val === "" || val === null || val === undefined) {
            return alert("invalid input");
        }
        weightInput.value = "";
        await API.submitWeight(val);
    };
    return (
        <div className="w-full flex flex-col items-center h-full">
            <div className="flex flex-col items-center gap-3 p-2 flex-grow">
                <h1 className="font-bold text-3xl">Input Weight</h1>
                <div className="w-full flex justify-center items-end gap-2">
                    <Input
                        id="weightInput"
                        type="number"
                        className="font-bold w-[3em] text-center"
                        style={{
                            fontSize: "2rem",
                        }}
                    ></Input>
                    kg
                </div>
                <Button onClick={submit}>Submit</Button>
            </div>
            <Button
                onClick={() => {
                    API.logout();
                }}
            >
                Logout
            </Button>
        </div>
    );
}
