using Microsoft.AspNetCore.Mvc;

namespace MyBackend.Controllers {
    [ApiController]
    [Route("projects")]
    public class DiscordWatchApiController : ControllerBase {
        private readonly HttpClient _httpClient;

        public DiscordWatchApiController(IHttpClientFactory httpClientFactory) {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet("get-truth-data")]
        public async Task<IActionResult> GetData() {

            String url = "https://discord.watch/api/v2/applications/929121472138604614";

            try {
                var response = await _httpClient.GetAsync(url);

                response.EnsureSuccessStatusCode();

                var data = await response.Content.ReadFromJsonAsync<dynamic>();

                return Ok(data);
            } catch (HttpRequestException e) {
                return StatusCode(500, e.Message);
            }
        }

    }
}