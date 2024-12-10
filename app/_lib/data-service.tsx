import { supabase } from "./supabase";

interface InnovationProps {
  id: number;
  dateSubmitted: string;
  employeeName: string;
  problem: string;
  proposedSolution: string;
}

export async function getInnovation(id: number) {
  const { data, error } = await supabase
    .from("innovative_ideas")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(`Get Innovation error: ${error}`);
  }

  return data;
}

export async function getInnovations(): Promise<InnovationProps[] | null> {
  console.log(1);
  const { data, error } = await supabase
    .from("innovative_ideas")
    .select("id,dateSubmitted,employeeName,problem,proposedSolution")
    .order("id");
  console.log(2);
  if (error) {
    console.error(error);
    throw new Error("Innovations could not be loaded");
  }
  console.log(3);
  // console.log("innovative_ideas", data);
  return data;
}
