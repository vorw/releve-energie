"use server";

export async function submitLead(formData: FormData) {
  console.log("submitLead called");

  // 1. Honeypot check for anti-spam
  const honeypot = formData.get("honeypot");
  if (honeypot) {
    console.log("Honeypot filled, aborting");
    // Silently ignore spam bots
    return { success: true };
  }

  // 2. Validate environment variable
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  console.log("Webhook URL exists:", !!webhookUrl, webhookUrl ? "(starts with " + webhookUrl.substring(0, 15) + "...)" : "");
  if (!webhookUrl) {
    console.error("Missing LEAD_WEBHOOK_URL environment variable.");
    return { success: false, error: "Server configuration error" };
  }

  // 3. Extract and map payload
  const payload = {
    source: "website",
    website: "releve-energie.fr",
    form_name: formData.get("form_name") || "contact_form",
    locale: formData.get("locale") || "fr",
    page_url: formData.get("page_url") || "",
    submitted_at: new Date().toISOString(),
    lead_status: "New Lead",
    priority: "New Website Lead",
    service_interest: formData.get("service_interest") || "General",
    name: formData.get("name") || "",
    phone: formData.get("phone") || "",
    email: formData.get("email") || "",
    housing_type: formData.get("housing_type") || "",
    user_type: formData.get("user_type") || "",
    company_name: formData.get("company_name") || "",
    building_type: formData.get("building_type") || "",
    surface_area_m2: formData.get("surface_area_m2") || "",
    building_address: formData.get("building_address") || "",
    preferred_time: formData.get("preferred_time") || "",
    message: formData.get("message") || "",
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
    utm_source: formData.get("utm_source") || "",
    utm_medium: formData.get("utm_medium") || "",
    utm_campaign: formData.get("utm_campaign") || "",
  };

  console.log("Payload prepared:", payload);

  // 4. Send to webhook
  console.log("Sending to Make...");
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Make response status:", response.status);

    if (!response.ok) {
      console.error(`Webhook error: ${response.status} ${response.statusText}`);
      return { success: false, error: "Webhook failed" };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead to webhook:", error);
    return { success: false, error: "Network error" };
  }
}
