namespace Application.Blogs
{
    public class LikedDto
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public string Image { get; set; }
        public bool IsHost { get; set; }
        public bool Following { get; set; }        
    }
}