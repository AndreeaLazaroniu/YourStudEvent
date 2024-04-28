using System.ComponentModel.DataAnnotations.Schema;
using BEYourStudEvents.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BEYourStudEvents.Configurations;

public class EventConfiguration : IEntityTypeConfiguration<Event>
{
    public void Configure(EntityTypeBuilder<Event> builder)
    {
        builder.ToTable("Events").HasKey(c => c.Id);
        
        //builder.Property(m=>m.EventId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        builder.Property(c=>c.Title).IsRequired().HasMaxLength(100);
        builder.Property(c=>c.Description).IsRequired();
        builder.Property(c=>c.Location).IsRequired();
        builder.Property(c=>c.Date).IsRequired();
        builder.Property(c=>c.Price).IsRequired();
        builder.Property(c=>c.Status).IsRequired();
        
        builder.HasOne(c => c.OrgUser)
            .WithMany(c=>c.Events)
            .HasForeignKey(c => c.OrgUserId)
            .HasConstraintName("FK_Events_OrgUser");
        
        builder.HasOne(c => c.Category)
            .WithMany(c=> c.Events)
            .HasForeignKey(c=>c.CatId)
            .HasConstraintName("Fk_Events_Category");
    }
}